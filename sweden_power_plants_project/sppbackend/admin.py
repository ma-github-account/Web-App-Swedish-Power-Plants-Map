from django.contrib.gis import admin
from .models import Category, Place

# Register your models here.
admin.site.register(Category)

class CustomGeoAdmin(admin.GISModelAdmin):
  gis_widget_kwargs = {
    'attrs': {
      'default_zoom' : 4,
      'default_lon': 16.35,
      'default_lat': 63.23
    }
  }

@admin.register(Place)
class PlaceAdmin(CustomGeoAdmin):
  pass
