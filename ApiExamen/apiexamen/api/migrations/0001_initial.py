# Generated by Django 2.0.9 on 2018-12-03 21:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.CharField(max_length=255)),
                ('precio', models.IntegerField(default=0)),
                ('tipo', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Tienda',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('direccion', models.CharField(max_length=100)),
                ('ciudad', models.CharField(max_length=50)),
                ('comuna', models.CharField(max_length=50)),
                ('telefono', models.CharField(max_length=9)),
                ('correo', models.EmailField(max_length=254)),
                ('encargado', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateTimeField()),
                ('cantidad', models.IntegerField()),
                ('comentario', models.CharField(max_length=200)),
                ('producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Producto')),
                ('sucursal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Tienda')),
            ],
        ),
    ]