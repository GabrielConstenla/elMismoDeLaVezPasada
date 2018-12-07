from django.contrib import admin

# Register your models here.

from .models import Orden, Cliente, Tecnico

admin.site.register( Orden )
admin.site.register( Cliente )
admin.site.register( Tecnico )
