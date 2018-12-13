from django.contrib import admin

# Register your models here.
from .forms import ClienteForm, TecnicoForm, OrdenForm
from .models import Orden, Cliente, Tecnico

class AdminCliente(admin.ModelAdmin):
    list_display = ["__str__","nombre"]
    form = ClienteForm

class AdminTecnico(admin.ModelAdmin):
    list_display_tecnico = ["__str__"]
    form = TecnicoForm

class AdminOrden(admin.ModelAdmin):
    list_display_orden = ["__str__"]
    form = OrdenForm

admin.site.register( Orden, AdminOrden )
admin.site.register( Cliente, AdminCliente )
admin.site.register( Tecnico, AdminTecnico )
