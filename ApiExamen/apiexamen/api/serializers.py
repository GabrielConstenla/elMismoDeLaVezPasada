from .models import Tienda, Producto, Venta
from rest_framework import serializers

from django.contrib.auth.models import User


class TiendaSerializer( serializers.HyperlinkedModelSerializer ):
    encargado = serializers.CharField( source='encargado.username' )

    class Meta:
        model = Tienda
        fields = ( 'nombre', 'direccion', 'ciudad', 'comuna', 'telefono', 'correo', 'encargado' )

class ProductoSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Producto
        fields = ( 'nombre', 'descripcion', 'precio', 'tipo')

class VentaSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Venta
        fields = ( 'id', 'producto', 'fecha', 'cantidad', 'sucursal', 'comentario' )
