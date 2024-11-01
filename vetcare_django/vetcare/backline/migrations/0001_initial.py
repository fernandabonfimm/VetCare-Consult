# Generated by Django 5.0.3 on 2024-05-24 01:23

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Clinica',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255, verbose_name='Nome')),
                ('email', models.EmailField(max_length=255, verbose_name='Email')),
                ('endereco', models.CharField(max_length=255, verbose_name='Endereço')),
                ('atendimento_24_horas', models.BooleanField(verbose_name='Atendimento 24 Horas')),
                ('atendimento_comercial', models.BooleanField(verbose_name='Atendimento Comercial')),
                ('especialidade', models.CharField(max_length=255, verbose_name='Especialidade')),
                ('descricao', models.TextField(verbose_name='Descrição')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Especialista',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255, verbose_name='Nome')),
                ('email', models.EmailField(max_length=255, verbose_name='Email')),
                ('telefone', models.CharField(max_length=20, verbose_name='Telefone')),
                ('cpf_cnpj', models.CharField(max_length=20, verbose_name='CPF/CNPJ')),
                ('especialidade', models.CharField(max_length=255, verbose_name='Especialidade')),
                ('autonomo', models.BooleanField(verbose_name='Autônomo')),
                ('crmv', models.CharField(max_length=20, verbose_name='CRMV')),
                ('clinica', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backline.clinica')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Datas',
            fields=[
                ('data_ocupada', models.DateField(verbose_name='Data Ocupada')),
                ('data_disponivel', models.DateField(verbose_name='Data Disponível')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('clinica', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backline.clinica')),
                ('especialista', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backline.especialista')),
            ],
        ),
        migrations.CreateModel(
            name='Agendamento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255, verbose_name='Nome')),
                ('nome_animal', models.CharField(max_length=255, verbose_name='Nome do Animal')),
                ('telefone', models.CharField(max_length=20, verbose_name='Telefone')),
                ('email', models.EmailField(max_length=255, verbose_name='Email')),
                ('data_agendamento', models.DateField(verbose_name='Data do Agendamento')),
                ('horario_agendamento', models.TimeField(verbose_name='Horário do Agendamento')),
                ('clinica', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backline.clinica')),
                ('especialista', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backline.especialista')),
            ],
        ),
        migrations.CreateModel(
            name='Horarios',
            fields=[
                ('horario_ocupado', models.DateTimeField(verbose_name='Horário Ocupado')),
                ('horario_disponivel', models.DateTimeField(verbose_name='Horário Disponível')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('clinica', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backline.clinica')),
                ('especialista', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backline.especialista')),
            ],
        ),
    ]
