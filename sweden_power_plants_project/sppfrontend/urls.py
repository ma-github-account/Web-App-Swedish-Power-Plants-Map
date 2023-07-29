from django.urls import path
from . import views


app_name = 'sppfrontend'
urlpatterns = [
    path('', views.placesListMap, name='placeslist_map'),
]