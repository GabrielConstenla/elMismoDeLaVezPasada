from django.db import models
from django.utils import timezone

# Create your models here.

class Cliente( models.Model ):
    id = models.AutoField( primary_key = True )
    nombre = models.CharField( max_length = 100, blank = False, null = False )
    direccion = models.CharField( max_length = 100, blank = False, null = False )
    ciudad = models.CharField( max_length = 50, blank = False, null = False )
    comuna = models.CharField( max_length = 50 )
    telefono = models.CharField( max_length = 9 )
    correo =  models.EmailField( max_length = 50 )

    def __str__( self ):
        return self.nombre

class Tecnico( models.Model ):
    id = models.AutoField( primary_key = True )
    nombre = models.CharField( max_length = 100, blank = False, null = False )
    cliente = models.ManyToManyField( Cliente )

    def __str__( self ):
        return self.nombre

class Orden( models.Model ):
    folio = models.AutoField( primary_key = True )
    cliente = models.ForeignKey( Cliente , blank=False, null=False, on_delete = models.CASCADE )
    fecha = models.DateField( blank = False, null = False )
    horaInicio = models.TimeField( default = timezone.localtime(timezone.now()), blank = False, null = False )
    horaTermino = models.TimeField( blank = False, null = False )
    idAscensor = models.CharField( max_length = 10, blank = False, null = False )
    modeloAscensor = models.CharField( max_length = 10, blank = False, null = False )
    fallas = models.TextField( max_length = 200, blank = True, null = True )
    reparaciones = models.TextField( max_length = 200, blank = True, null = True )
    piezas = models.TextField( max_length = 200, blank = True, null = True )
    tecnico = models.ForeignKey( Tecnico , blank = False, null = False, on_delete = models.CASCADE )

    def __str__( self ):
        return str( self.folio )
