# Generated by Django 2.0.9 on 2018-12-13 17:08

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20181213_1403'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orden',
            name='horaInicio',
            field=models.TimeField(default=datetime.datetime(2018, 12, 13, 17, 8, 32, 258927, tzinfo=utc)),
        ),
    ]