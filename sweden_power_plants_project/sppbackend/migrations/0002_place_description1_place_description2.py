# Generated by Django 4.1.4 on 2023-07-22 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sppbackend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='place',
            name='description1',
            field=models.CharField(blank=True, max_length=254),
        ),
        migrations.AddField(
            model_name='place',
            name='description2',
            field=models.CharField(blank=True, max_length=254),
        ),
    ]