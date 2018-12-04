from django.db import models


# Create your models here.

class Tienda( models.Model ):
    id = models.AutoField( primary_key = True )
    nombre = models.CharField( max_length = 100, blank=False, null=False )
    direccion = models.CharField( max_length = 100, blank=False, null=False )
    ciudad = models.CharField( max_length = 50 )
    comuna = models.CharField( max_length = 50 )
    telefono = models.CharField( max_length = 9 )
    correo =  models.EmailField( )
    encargado =  models.ForeignKey( 'auth.User', on_delete = models.CASCADE )

    def __str__( self ):
        return self.nombre

class Producto( models.Model ):
    id = models.AutoField( primary_key = True )
    nombre = models.CharField( max_length = 100, blank=False, null=False )
    descripcion = models.CharField( max_length = 255 )
    precio = models.IntegerField( default = 0 )
    tipo =  models.CharField( max_length = 20 )

    def __str__( self ):
        return self.nombre

class Venta( models.Model ):
    id = models.AutoField( primary_key = True )
    producto = models.ForeignKey( Producto, blank = False, null = False, on_delete = models.CASCADE )
    fecha = models.DateTimeField( blank = False, null = False )
    cantidad = models.IntegerField(blank = False, null = False )
    sucursal = models.ForeignKey( Tienda, blank = False, null = False, on_delete = models.CASCADE ) # Estará bien tienda ahí?
    comentario = models.CharField( max_length = 200, blank = True, null = True )

    def __str__( self ):
        return self.producto
