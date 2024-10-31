from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm
from django import forms
from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from .models import Agendamento
from django.core.mail import send_mail
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import Agendamento, Especialista, Clinica

def home(request):
    if request.method == 'POST':
        form = AgendamentoForm(request.POST)
        if form.is_valid():
            agendamento = form.save()
            
            subject = 'Confirmação de Agendamento VetCare Consult'
            message = f'Olá {agendamento.nome},\n\nSeu agendamento foi confirmado para o dia {agendamento.data_agendamento} às {agendamento.horario_agendamento}.\n\nObrigado!'
            from_email = 'vetcare.consult.sas@gmail.com'
            recipient_list = [agendamento.email]
            
            try:
                send_mail(subject, message, from_email, recipient_list)
            except Exception as e:
                print(e)
            
            return redirect('successSchendule')
    else:
        form = AgendamentoForm()
    return render(request, 'home.html', {'form': form})

@login_required
def schendules(request):
    user = request.user

    context = {
        'nome_usuario': user.first_name
    }
    return render(request, 'schendules.html', context)

@login_required
def eventos(request):
    year = request.GET.get('year')
    month = request.GET.get('month')
    if year and month:
        agendamentos = Agendamento.objects.filter(data_agendamento__year=year, data_agendamento__month=month)
    else:
        agendamentos = Agendamento.objects.all()
    events = []
    for agendamento in agendamentos:
        events.append({
            'date': f"{agendamento.data_agendamento}T{agendamento.horario_agendamento}",
            'title': f"{agendamento.horario_agendamento} | {agendamento.nome_animal} - {agendamento.nome}"
        })
    return JsonResponse(events, safe=False)

def login(request):
    return render(request, 'login.html')

class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'input', 'placeholder': 'Digite seu username...'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'input', 'placeholder': 'Digite sua senha...'}))

class CustomLoginView(LoginView):
    form_class = LoginForm
    template_name = 'login.html'
    next_page = 'schendules'

def successSchendule(request):
    return render(request, 'successSchendule.html')


class AgendamentoForm(forms.ModelForm):
    class Meta:
        model = Agendamento
        fields = [
            'nome', 'nome_animal', 'telefone', 'email', 'data_agendamento',
            'horario_agendamento', 'especialista', 'clinica'
        ]

        widgets = {
            'nome': forms.TextInput(attrs={'class': 'input', 'placeholder': 'Digite aqui o nome do tutor/companhia...'}),
            'nome_animal': forms.TextInput(attrs={'class': 'input', 'placeholder': 'Digite aqui o nome do animal/código...'}),
            'telefone': forms.TextInput(attrs={'class': 'input', 'placeholder': 'Ex: (99) 99999-9999'}),
            'email': forms.EmailInput(attrs={'class': 'input', 'placeholder': 'Ex: example@example.com'}),
            'data_agendamento': forms.DateInput(attrs={'class': 'input', 'type': 'date'}),
            'horario_agendamento': forms.TimeInput(attrs={'class': 'input', 'type': 'time'}),
            'especialista': forms.Select(attrs={'class': 'input'}),
            'clinica': forms.Select(attrs={'class': 'input'})
        }

    especialista = forms.ModelChoiceField(
        queryset=Especialista.objects.all(),
        widget=forms.Select(attrs={'class': 'input'}),
        required=True,
        empty_label="Selecione a especialista..."
    )
    clinica = forms.ModelChoiceField(
        queryset=Clinica.objects.all(),
        widget=forms.Select(attrs={'class': 'input'}),
        required=True,
        empty_label="Selecione a clinica..."
    )