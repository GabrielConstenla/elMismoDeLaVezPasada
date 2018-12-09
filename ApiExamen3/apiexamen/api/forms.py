from django import forms
from .models import Cliente, Orden, Tecnico
from django.core.exceptions import ValidationError
from django.utils import timezone


class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = ["nombre","direccion","ciudad","comuna","telefono","correo"]

    def clean_nombre(self):
            nombre = self.cleaned_data['nombre']
            if len(nombre.split(' ')) < 4 :
                raise ValidationError("Por favor ingresa tu nombre completo")
            return nombre

    def clean_telefono(self):
        telefono = self.cleaned_data['telefono']
        if telefono.isalpha():
            raise ValidationError('El telefono no puede contener letras')
        elif len(telefono) <= 8:
            raise ValidationError("Ingresa un telefono con un 9 digitos")
        return telefono

    def clean_correo(self):
        correo = self.cleaned_data['correo']

        correo_base, proveedor = correo.split("@")
        dominio, extension = proveedor.split(".")
        if not dominio == "gmail":
            raise ValidationError("Aqui se tiene que registrar con gmail.com")
        elif not extension == "com":
            raise ValidationError("Aqui se tiene que registrar con gmail.com")
        return correo

class TecnicoForm(forms.ModelForm):
    class Meta:
        model = Tecnico
        fields = ["nombre", "cliente"]

    def clean_nombre(self):
        nombre = self.cleaned_data['nombre']
        if len(nombre.split(' ')) < 4 :
            raise ValidationError("Por favor ingresa tu nombre completo")
        return nombre

    # def clean_cliente(self):
    #     cliente = self.cleaned_data['cliente']
    #     if cliente is empty:
    #         raise ValidationError("Por favor seleccione un cliente")
    #     return cliente


class OrdenForm(forms.ModelForm):
    class Meta:
        model = Orden
        fields = ["folio","cliente","fecha","horaInicio","horaTermino","ascensor","fallas","reparaciones","piezas","tecnico"]

    def clean_horaTermino(self):
        horaTermino = self.cleaned_data['horaTermino']
        horaInicio = self.cleaned_data['horaInicio']
        if horaTermino is timezone.now:
            raise ValidationError("safe")
        return horaTermino