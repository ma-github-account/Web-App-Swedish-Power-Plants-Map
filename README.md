This application displays Swedish power plants map. Power plants are added in admin panel. After adding they are displayed on the map of Sweden with the icon based on the category of power plant. Clicking the power plant icon results in picture and description display.

Prerequisites:

- Python 3.9.7,
- Django 4.1.2,
- Django Rest Framework 3.14.0
- Pillow 7.0.0 (pip install Pillow==7.0.0)
- GeoDjango (PostGIS, PostgreSQL, Psycopg2, OSGeo4W, Gdal)
After installing PostreSQL and creating geospatial database, it needs to be referenced in settings.py file (line 109).

After creating geospatial database, the categories in Admin panel need to be created in following order:
1.Fossil Fuel Power Plant
2.Nuclear Power Plant
3.Hydroelectric Power Plant
4.Wind Farm Power Plant
That way the proper icons are assigned to particular categories.

Application is based on Australian Cultural Heritage Places application presented by Ikrom Nishanbaev in his Udemy Course "Leaflet From Scratch With A GeoDjango Project".

How to run: 1.python manage.py makemigrations 2.python manage.py migrate 3.Adding desired cities to the geospatial database 4.python manage.py runserver
