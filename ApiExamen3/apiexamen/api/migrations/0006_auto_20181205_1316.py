# Generated by Django 2.0.9 on 2018-12-05 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20181204_2138'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tecnico',
            name='cliente',
        ),
        migrations.AddField(
            model_name='tecnico',
            name='cliente',
            field=models.ManyToManyField(to='api.Cliente'),
        ),
    ]