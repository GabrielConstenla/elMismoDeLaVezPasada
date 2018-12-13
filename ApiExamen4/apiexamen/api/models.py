from django.db import models
from django.utils import timezone
import datetime
# Create your models here.

CIUDAD_CHOICES = (
    ('',''),
    ('Santiago','Santiago'),
    ('',''),
)

COMUNA_CHOICES = (
    ('Cerrillos','Cerrillos'),
    ('Cerro Navia','Cerro Navia'),
    ('Conchalí','Conchalí'),
    ('El Bosque','El Bosque'),
    ('Estación Central','Estación Central'),
    ('Huechuraba','Huechuraba'),
    ('Independencia','Independencia'),
    ('La Cisterna','La Cisterna'),
    ('La Florida','La Florida'),
    ('La Pintana','La Pintana'),
    ('La Granja','La Granja'),
    ('La Reina','La Reina'),
    ('Las Condes','Las Condes'),
    ('Lo Barnechea','Lo Barnechea'),
    ('Lo Espejo','Lo Espejo'),
    ('Lo Prado','Lo Prado'),
    ('Macul','Macul'),
    ('Maipú','Maipú'),
    ('Ñuñoa','Ñuñoa'),
    ('Padre Hurtado','Padre Hurtado'),
    ('Pedro Aguirre Cerda','Pedro Aguirre Cerda'),
    ('Peñalolén','Peñalolén'),
    # ('Pirque','Pirque'),
    ('Providencia','Providencia'),
    ('Pudahuel','Pudahuel'),
    ('Puente Alto','Puente Alto'),
    ('Quilicura','Quilicura'),
    ('Quinta Normal','Quinta Normal'),
    ('Recoleta','Recoleta'),
    ('Renca','Renca'),
    ('San Bernardo','San Bernardo'),
    ('San Miguel','San Miguel'),
    ('San Joaquín','San Joaquín'),
    # ('San José de Maipo','San José de Maipo'),
    ('San Ramón','San Ramón'),
    ('Santiago','Santiago'),
    ('Vitacura','Vitacura'),
)
class Cliente( models.Model ):
    id = models.AutoField( primary_key = True )
    nombre = models.CharField( max_length = 100, blank = False, null = False )
    direccion = models.CharField( max_length = 100, blank = False, null = False )
    ciudad = models.CharField( max_length = 50, blank = False, null = False, choices = CIUDAD_CHOICES )
    comuna = models.CharField( max_length = 50, choices = COMUNA_CHOICES )
    telefono = models.CharField( max_length = 9 )
    correo =  models.EmailField( max_length = 50 )

    def __str__( self ):
        return self.nombre

class Tecnico( models.Model ):
    id = models.AutoField( primary_key = True )
    nombre = models.CharField(  max_length = 100, blank = False, null = False )
    cliente = models.ManyToManyField( Cliente )
    email = models.EmailField(max_length = 50)
    password = models.CharField(max_length = 50)

    def __str__( self ):
        return self.nombre

class Orden( models.Model ):
    folio = models.AutoField( primary_key = True )
    cliente = models.CharField( max_length = 100, blank=False, null=False )
    fecha = models.DateField( default= datetime.date.today, blank = False, null = False )
    horaInicio = models.TimeField( default = timezone.localtime(timezone.now()), blank = False, null = False )
    horaTermino = models.TimeField( blank = False, null = False )
    idAscensor = models.CharField( max_length = 10, blank = False, null = False )
    modeloAscensor = models.CharField( max_length = 10, blank = False, null = False )
    fallas = models.TextField( max_length = 200, blank = True, null = True )
    reparaciones = models.TextField( max_length = 200, blank = True, null = True )
    piezas = models.TextField( max_length = 200, blank = True, null = True )
    tecnico = models.CharField( max_length = 100, blank = False, null = False)

    def __str__( self ):
        return str( self.folio )
