# Generated by Django 2.1.7 on 2019-03-17 11:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20190317_1219'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='cv',
        ),
    ]