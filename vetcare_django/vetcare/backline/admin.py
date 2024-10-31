from django.contrib import admin
from .models import Agendamento, Especialista, Clinica, Horarios, Datas

admin.site.register(Agendamento)
admin.site.register(Especialista)
admin.site.register(Clinica)
admin.site.register(Horarios)
admin.site.register(Datas)