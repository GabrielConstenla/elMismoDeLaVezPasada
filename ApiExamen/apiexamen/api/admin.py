from django.contrib import admin

# Register your models here.
from .models import Tienda, Producto, Venta

admin.site.register( Tienda )
admin.site.register( Producto )
admin.site.register( Venta )
