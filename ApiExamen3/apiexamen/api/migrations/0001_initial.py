# Generated by Django 2.0.9 on 2018-12-04 22:40

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('direccion', models.CharField(max_length=100)),
                ('ciudad', models.CharField(max_length=50)),
                ('comuna', models.CharField(max_length=50)),
                ('telefono', models.CharField(max_length=9)),
                ('correo', models.EmailField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Orden',
            fields=[
                ('folio', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateTimeField()),
                ('horaInicio', models.TimeField(default=django.utils.timezone.now)),
                ('horaTermino', models.TimeField()),
                ('ascensor', models.CharField(max_length=10)),
                ('fallas', models.TextField(blank=True, max_length=200, null=True)),
                ('reparaciones', models.TextField(blank=True, max_length=200, null=True)),
                ('piezas', models.TextField(blank=True, max_length=200, null=True)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Cliente')),
            ],
        ),
        migrations.CreateModel(
            name='Tecnico',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('cliente', models.ManyToManyField(to='api.Cliente')),
            ],
        ),
        migrations.AddField(
            model_name='orden',
            name='tecnico',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Tecnico'),
        ),
    ]