from django.shortcuts import render
# Create your views here.

from .models import Tienda, Producto, Venta
from rest_framework import viewsets
from api.serializers import TiendaSerializer, ProductoSerializer, VentaSerializer

class TiendasViewSet( viewsets.ModelViewSet ):
    queryset = Tienda.objects.all().order_by('id')
    serializer_class = TiendaSerializer

class ProductosViewSet( viewsets.ModelViewSet ):
    queryset = Producto.objects.all().order_by('id')
    serializer_class = ProductoSerializer

class VentasViewSet( viewsets.ModelViewSet ):
    queryset = Venta.objects.all().order_by('id')
    serializer_class = VentaSerializer
