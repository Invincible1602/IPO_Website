from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='ipo-home'),
    path('api/ipos/', views.fetch_ipo_data, name='fetch-ipos'),
    path('api/documents/', views.fetch_document_data, name='fetch-documents'),
]
