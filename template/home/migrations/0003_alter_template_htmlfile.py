# Generated by Django 4.2 on 2023-04-08 16:29

from django.db import migrations, models
import home.models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_auto_20201130_2357'),
    ]

    operations = [
        migrations.AlterField(
            model_name='template',
            name='htmlFile',
            field=models.FileField(blank=True, null=True, upload_to=home.models.get_html_path),
        ),
    ]