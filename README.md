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




![1](https://github.com/ma-github-account/Web-App-Swedish-Power-Plants-Map/assets/89083426/355ef7c7-6d55-4077-b748-cbe212294577)








![2](https://github.com/ma-github-account/Web-App-Swedish-Power-Plants-Map/assets/89083426/a56e3df5-0361-46dd-b356-e66f6ab026b8)







![3](https://github.com/ma-github-account/Web-App-Swedish-Power-Plants-Map/assets/89083426/7173774f-e7a2-4501-a84d-ee7f47b97deb)







![4](https://github.com/ma-github-account/Web-App-Swedish-Power-Plants-Map/assets/89083426/f875f714-1881-4dc2-a0ac-f57c5dbded38)








![5](https://github.com/ma-github-account/Web-App-Swedish-Power-Plants-Map/assets/89083426/51bb0756-e16d-40d9-8036-e9baf285f2bd)






![6](https://github.com/ma-github-account/Web-App-Swedish-Power-Plants-Map/assets/89083426/0aafe1dd-0e5c-4a60-bc26-faa69862fbd1)







![7](https://github.com/ma-github-account/Web-App-Swedish-Power-Plants-Map/assets/89083426/a3f5fa4b-6abb-460f-8778-b2de450d065b)









