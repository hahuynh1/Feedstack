from django.urls import path
from . import views

urlpatterns = [
    path('images/', views.image_list),
    path('feedback/', views.generate_feedback),
]
