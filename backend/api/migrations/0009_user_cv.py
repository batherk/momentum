# Generated by Django 2.1.7 on 2019-03-17 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_remove_user_cv'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='cv',
            field=models.FileField(blank=True, default=None, null=True, upload_to='api/cv_files'),
        ),
    ]