from django.db import models
from django.contrib.auth.models import User

class Agendamento(models.Model):
    nome = models.CharField(verbose_name="Nome", max_length=255, null=False, blank=False)
    nome_animal = models.CharField(verbose_name="Nome do Animal", max_length=255, null=False, blank=False)
    telefone = models.CharField(verbose_name="Telefone", max_length=20)
    email = models.EmailField(verbose_name="Email", max_length=255)
    data_agendamento = models.DateField(verbose_name="Data do Agendamento")
    horario_agendamento = models.TimeField(verbose_name="Horário do Agendamento")
    especialista = models.ForeignKey('Especialista', on_delete=models.CASCADE)
    clinica = models.ForeignKey('Clinica', on_delete=models.CASCADE)

    def __str__(self):
        return f"Agendamento - {self.nome}"

class Especialista(models.Model):
    nome = models.CharField(verbose_name="Nome", max_length=255, null=False, blank=False)
    email = models.EmailField(verbose_name="Email", max_length=255)
    telefone = models.CharField(verbose_name="Telefone", max_length=20)
    cpf_cnpj = models.CharField(verbose_name="CPF/CNPJ", max_length=20)
    especialidade = models.CharField(verbose_name="Especialidade", max_length=255)
    clinica = models.ForeignKey('Clinica', on_delete=models.CASCADE)
    autonomo = models.BooleanField(verbose_name="Autônomo")
    crmv = models.CharField(verbose_name="CRMV", max_length=20)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Especialista - {self.nome}"

class Clinica(models.Model):
    nome = models.CharField(verbose_name="Nome", max_length=255, null=False, blank=False)
    email = models.EmailField(verbose_name="Email", max_length=255)
    endereco = models.CharField(verbose_name="Endereço", max_length=255)
    atendimento_24_horas = models.BooleanField(verbose_name="Atendimento 24 Horas")
    atendimento_comercial = models.BooleanField(verbose_name="Atendimento Comercial")
    especialidade = models.CharField(verbose_name="Especialidade", max_length=255)
    descricao = models.TextField(verbose_name="Descrição")
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Clinica - {self.nome}"

class Horarios(models.Model):
    especialista = models.ForeignKey('Especialista', on_delete=models.CASCADE)
    clinica = models.ForeignKey('Clinica', on_delete=models.CASCADE)
    horario_ocupado = models.DateTimeField(verbose_name="Horário Ocupado")
    horario_disponivel = models.DateTimeField(verbose_name="Horário Disponível")
    id = models.AutoField(primary_key=True)  

    def __str__(self):
        return f"Horários - {self.id}"

class Datas(models.Model):
    especialista = models.ForeignKey('Especialista', on_delete=models.CASCADE)
    clinica = models.ForeignKey('Clinica', on_delete=models.CASCADE)
    data_ocupada = models.DateField(verbose_name="Data Ocupada")
    data_disponivel = models.DateField(verbose_name="Data Disponível")
    id = models.AutoField(primary_key=True)

    def __str__(self):
        return f"Datas - {self.id}"