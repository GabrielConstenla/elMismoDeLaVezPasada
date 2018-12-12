from .models import Orden, Cliente, Tecnico
from rest_framework import serializers

class ClienteSerializer( serializers.HyperlinkedModelSerializer ):

    class Meta:
        model = Cliente
        fields = ( 'id', 'nombre', 'direccion', 'ciudad', 'comuna', 'telefono', 'correo')

class TecnicoSerializer( serializers.HyperlinkedModelSerializer ):

    cliente = serializers.SlugRelatedField(
        many= True,
        read_only= True,
        slug_field='nombre'
    )

    class Meta:
        model = Tecnico
        fields = ( 'id', 'nombre', 'cliente' )

class OrdenSerializer( serializers.HyperlinkedModelSerializer ):

    cliente = serializers.SlugRelatedField(
        many= False,
        read_only= True,
        slug_field='nombre'
    )

    tecnico = serializers.SlugRelatedField(
        many= False,
        read_only= True,
        slug_field='nombre'
    )

    class Meta:
        model = Orden
        fields = ( 'folio', 'cliente', 'fecha', 'horaInicio', 'horaTermino', 'idAscensor', 'modeloAscensor', 'fallas', 'reparaciones', 'piezas', 'tecnico')
