from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .models import DesignImage
from .serializers import DesignImageSerializer

@api_view(['GET', 'POST'])
@parser_classes([MultiPartParser, FormParser])
def image_list(request):
    if request.method == 'GET':
        images = DesignImage.objects.all()
        serializer = DesignImageSerializer(images, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DesignImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def generate_feedback(request):
    image_url = request.data.get('image_url')
    if not image_url:
        return Response({'error': 'Image URL is required'}, status=status.HTTP_400_BAD_REQUEST)

    # openai.api_key = ''
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Provide feedback for this design: {image_url}",
        max_tokens=150
    )

    feedback = response.choices[0].text.strip()
    return Response({'feedback': feedback})
