from .models import Orden, Cliente, Tecnico
from rest_framework import serializers

class OrdenSerializer( serializers.HyperlinkedModelSerializer ):

    class Meta:
        model = Orden
        fields = ( 'folio', 'cliente', 'fecha', 'horaInicio', 'horaTermino', 'idAscensor', 'modeloAscensor', 'fallas', 'reparaciones', 'piezas', 'tecnico')

class ClienteSerializer( serializers.HyperlinkedModelSerializer ):

    class Meta:
        model = Cliente
        fields = ( 'id', 'nombre', 'direccion', 'ciudad', 'comuna', 'telefono', 'correo')

class TecnicoSerializer( serializers.HyperlinkedModelSerializer ):

    class Meta:
        model = Tecnico
        fields = ( 'id', 'nombre', 'cliente' )
