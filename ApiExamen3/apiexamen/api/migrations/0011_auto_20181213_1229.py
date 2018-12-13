# Generated by Django 2.0.9 on 2018-12-13 15:29

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20181212_0831'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='ciudad',
            field=models.CharField(choices=[('', ''), ('Santiago', 'Santiago'), ('', '')], max_length=50),
        ),
        migrations.AlterField(
            model_name='cliente',
            name='comuna',
            field=models.CharField(choices=[('Cerrillos', 'Cerrillos'), ('Cerro Navia', 'Cerro Navia'), ('Conchalí', 'Conchalí'), ('El Bosque', 'El Bosque'), ('Estación Central', 'Estación Central'), ('Huechuraba', 'Huechuraba'), ('Independencia', 'Independencia'), ('La Cisterna', 'La Cisterna'), ('La Florida', 'La Florida'), ('La Pintana', 'La Pintana'), ('La Granja', 'La Granja'), ('La Reina', 'La Reina'), ('Las Condes', 'Las Condes'), ('Lo Barnechea', 'Lo Barnechea'), ('Lo Espejo', 'Lo Espejo'), ('Lo Prado', 'Lo Prado'), ('Macul', 'Macul'), ('Maipú', 'Maipú'), ('Ñuñoa', 'Ñuñoa'), ('Padre Hurtado', 'Padre Hurtado'), ('Pedro Aguirre Cerda', 'Pedro Aguirre Cerda'), ('Peñalolén', 'Peñalolén'), ('Providencia', 'Providencia'), ('Pudahuel', 'Pudahuel'), ('Puente Alto', 'Puente Alto'), ('Quilicura', 'Quilicura'), ('Quinta Normal', 'Quinta Normal'), ('Recoleta', 'Recoleta'), ('Renca', 'Renca'), ('San Bernardo', 'San Bernardo'), ('San Miguel', 'San Miguel'), ('San Joaquín', 'San Joaquín'), ('San Ramón', 'San Ramón'), ('Santiago', 'Santiago'), ('Vitacura', 'Vitacura')], max_length=50),
        ),
        migrations.AlterField(
            model_name='orden',
            name='horaInicio',
            field=models.TimeField(default=datetime.datetime(2018, 12, 13, 15, 29, 6, 963446, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='orden',
            name='tecnico',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.Tecnico'),
            preserve_default=False,
        ),
    ]