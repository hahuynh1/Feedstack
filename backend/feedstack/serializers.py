from rest_framework import serializers
from .models import DesignImage

class DesignImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesignImage
        fields = '__all__'
