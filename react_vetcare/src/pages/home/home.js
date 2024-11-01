import React from "react";
import "./home.css";
import LogoBranca from "../../assets/img/logo-branca.png";
import LogoEscura from "../../assets/img/logoescura.png";
import Helpicon from "../../assets/img/icons/helpicon.png";
import Usericon from "../../assets/img/icons/usericon.png";
import Menuicon from "../../assets/img/icons/menuicon.png";
import Banner1 from "../../assets/img/banner1.png";
import Gato from "../../assets/img/gato.png";
import Cachorro from "../../assets/img/cachorro.png";
import Vaca from "../../assets/img/vaca.png";
import Coelho from "../../assets/img/coelho.png";
import Office from "../../assets/img/icons/office.png";
import Calendario from "../../assets/img/icons/calendar.png";
import Logoplan from "../../assets/img/logoplan.png";
import Dogandcat from "../../assets/img/dogandcat.png";

function SelectAnimal() {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <body>
      <div class="header-container">
        <div class="div-logo-header">
          <img
            src={LogoEscura}
            alt="VetCare Consult Logo"
            class="logo-header"
          />
        </div>
        <div class="div-content-info-header" id="menu-desktop-header">
          <button class="btn-header-info">Para profissionais</button>
          <button class="btn-header-info">
            Pergunte ao Profissional de Saúde Animal
          </button>
          <img src={Helpicon} alt="Help Icon" class="icon-header-help" />
          <div class="divider-vertical"></div>
          <button class="btn-header-login" onClick={handleClick}>
            <img src={Usericon} alt="User Icon" class="icon-header-user" />
            {isActive ? "Entrar na conta" : "Sair da conta"}
          </button>
        </div>
      </div>
      <nav class="navbar-container">
        <button class="btn-navbar">O VET CARE</button>
        <button class="btn-navbar">hospitais</button>
        <button class="btn-navbar">especialidades</button>
        <button class="btn-navbar">serviços</button>
        <button class="btn-navbar">exames veterinários</button>
        <button class="btn-navbar">contato</button>
      </nav>
      <div class="carousel-container">
        <div class="carousel-slide">
          <img src={Banner1} alt="Image 1" />
        </div>
        <div class="carousel-navigation">
          <span class="carousel-dot"></span>
          <span class="carousel-dot"></span>
        </div>
      </div>
      <section id="schedules" class="schedules-container">
        <div class="div-section-title bg-yellow">
          <h1 class="title-section tx-white">Agendamento</h1>
          <span class="description-section tx-white">
            Faça aqui mesmo, é rapidinho!
          </span>
          <div class="divider-horizontal bg-white"></div>
        </div>
        <div class="div-form-schedules">
          <div class="div-chose-animal">
            <div class="div-row-cards">
              <label class="label">Escolha a espécie do animal:</label>
            </div>
            <div class="div-row-cards">
              <div
                class="card-chose-animal"
                onclick="selectAnimal('cat')"
                data-animal="cat"
              >
                <div class="div-card-img">
                  <img src={Gato} alt="Gato" />
                </div>
                <div class="divider-card-chose-animal"></div>
                <div class="div-title-card">
                  <h1>gato</h1>
                </div>
              </div>
              <div
                class="card-chose-animal"
                onclick="selectAnimal('dog')"
                data-animal="dog"
              >
                <div class="div-card-img">
                  <img src={Cachorro} alt="Cachorro" />
                </div>
                <div class="divider-card-chose-animal"></div>
                <div class="div-title-card">
                  <h1>cachorro</h1>
                </div>
              </div>
            </div>
            <div class="div-row-cards">
              <div
                class="card-chose-animal"
                onclick="selectAnimal('small-animal')"
                data-animal="small-animal"
              >
                <div class="div-card-img">
                  <img src={Coelho} alt="Coelho" />
                </div>
                <div class="divider-card-chose-animal"></div>
                <div class="div-title-card">
                  <h1>OUTRO</h1>
                  <span>(porte pequeno)</span>
                </div>
              </div>
              <div
                class="card-chose-animal"
                onclick="selectAnimal('big-animal')"
                data-animal="big-animal"
              >
                <div class="div-card-img">
                  <img src={Vaca} alt="Vaca" />
                </div>
                <div class="divider-card-chose-animal"></div>
                <div class="div-title-card">
                  <h1>OUTRO</h1>
                  <span>(porte grande)</span>
                </div>
              </div>
            </div>
          </div>
          <div class="divider-vertical-big bg-yellow"></div>
          <div class="div-form-schedules-info">
            <form method="post" action="" class="form-schedules">
              <div class="container-input-label">
                <label for="name" class="label">
                  Nome do tutor ou companhia:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="input"
                  placeholder="Digite aqui o nome do tutor/companhia..."
                  maxlength="150"
                  required
                />
              </div>
              <div class="container-input-label">
                <label for="animal-name" class="label">
                  Nome do animal ou código:
                </label>
                <input
                  type="text"
                  id="animal-name"
                  name="animal-name"
                  class="input"
                  placeholder="Digite aqui o nome do animal/código..."
                  maxlength="150"
                  required
                />
              </div>
              <div class="container-input-label">
                <label for="phone" class="label">
                  Telefone para contato:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  class="input"
                  placeholder="Ex: (99) 99999-9999"
                  required
                />
              </div>
              <div class="container-input-label">
                <label for="email" class="label">
                  E-mail para contato:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="input"
                  placeholder="Ex: example@example.com"
                  required
                />
                <span class="error-message" id="email-error">
                  E-mail esta no formato incorreto! ex: example@example.com
                </span>
              </div>
              <div class="flex-two-inputs">
                <div class="middle-div">
                  <div class="container-input-label">
                    <label for="data" class="label">
                      Data de Agendamento:
                    </label>
                    <input
                      type="date"
                      id="data"
                      name="data"
                      class="input"
                      required
                    />
                    <span class="error-message" id="data-error">
                      Escolha ao menos uma data de agendamento maior do que o
                      dia atual.
                    </span>
                  </div>
                </div>
                <div class="middle-div">
                  <div class="container-input-label">
                    <label for="hour" class="label">
                      Horário:
                    </label>
                    <input
                      type="time"
                      id="hour"
                      name="hour"
                      class="input"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="flex-two-inputs">
                <div class="middle-div">
                  <div class="container-input-label">
                    <label for="speciality" class="label">
                      Especialidade:
                    </label>
                    <select
                      id="speciality"
                      name="speciality"
                      class="input"
                      required
                    >
                      <option value="" selected disabled hidden>
                        Selecione a especialidade...
                      </option>
                      <option value="1">Clinico Geral</option>
                      <option value="2">Dermatologia</option>
                      <option value="3">Oftalmologia</option>
                      <option value="4">Ortopedia</option>
                      <option value="5">Oncologia</option>
                      <option value="6">Cardiologia</option>
                      <option value="14">Outra</option>
                    </select>
                    <span class="error-message" id="speciality-error">
                      Escolha uma especialidade para o agendamento.
                    </span>
                  </div>
                </div>
                <div class="middle-div">
                  <div class="container-input-label">
                    <label for="unit" class="label">
                      Unidade:
                    </label>
                    <select id="unit" name="unit" class="input" required>
                      <option value="" selected disabled hidden>
                        Selecione a unidade...
                      </option>
                      <option value="1">Clinicão</option>
                      <option value="2">Rivelles</option>
                      <option value="3">Vet Quality</option>
                      <option value="4">A.M.E VET Clínica</option>
                    </select>
                    <span class="error-message" id="unit-error">
                      Escolha uma unidade para o agendamento.
                    </span>
                  </div>
                </div>
              </div>
              <div class="div-btn-schedules-confirm">
                <button class="btn-schedules-confirm" type="submit">
                  Confirmar Agendamento
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section id="speciality" class="speciality-container">
        <div class="div-section-title bg-yellow">
          <h1 class="title-section tx-white">ESPECIALISTA</h1>
          <span class="description-section tx-white">
            Conheça os especialistas presentes na VetCare Consult
          </span>
          <div class="divider-horizontal bg-white"></div>
        </div>
        <div class="container-speacialitis">
          <div class="content-specialisty anasilva">
            <div class="content-description-speacialist">
              <h1>Dra. Ana Silva</h1>
              <div class="div-office">
                <img src={Office} alt="office" />
                <h3>Clinicão</h3>
              </div>
              <span>
                Olá, sou a Dra. Ana Silva, especialista em medicina interna
                veterinária na clínica "Clinicão". Com mais de 10 anos de
                experiência, foco no cuidado de cães e gatos de porte pequeno.
                Estou aqui para garantir a saúde e o bem-estar do seu pet com
                diagnósticos precisos e tratamentos eficazes. Conte comigo para
                proporcionar ao seu companheiro todo o carinho e atenção que ele
                merece.
              </span>
              <button>
                <img src={Calendario} alt="calendar" />
                AGENDAR CONSULTA
              </button>
            </div>
          </div>
          <div class="content-specialisty carlasantos">
            <div class="content-description-speacialist">
              <h1>Dra. Ana Silva</h1>
              <div class="div-office">
                <img src={Office} alt="office" />
                <h3>Clinicão</h3>
              </div>
              <span>
                Olá, sou a Dra. Ana Silva, especialista em medicina interna
                veterinária na clínica "Clinicão". Com mais de 10 anos de
                experiência, foco no cuidado de cães e gatos de porte pequeno.
                Estou aqui para garantir a saúde e o bem-estar do seu pet com
                diagnósticos precisos e tratamentos eficazes. Conte comigo para
                proporcionar ao seu companheiro todo o carinho e atenção que ele
                merece.
              </span>
              <button>
                <img src={Calendario} alt="calendar" />
                AGENDAR CONSULTA
              </button>
            </div>
          </div>
        </div>
        <div class="btn-all-specialisty">
          <button>CONHEÇA TODOS OS ESPECIALISTAS</button>
        </div>
      </section>
      <section id="plans" class="plans-container">
        <div class="div-section-title bg-darkgreen">
          <h1 class="title-section tx-white">Conheça os nossos planos</h1>
          <span class="description-section tx-white">
            Os planos são exclusivos para medicos veterinários e clínicas
          </span>
          <div class="divider-horizontal bg-white"></div>
        </div>
        <div class="content-all-plans bg-green">
          <div class="card-plan">
            <div class="card-plan-img">
              <img src={Logoplan} alt="Plano 1" />
            </div>
            <div class="card-plan-info">
              <h1>Started</h1>
              <span>
                Este plano básico oferece recursos essenciais para começar.
                Perfeito para médicos veterinários autônomos.
              </span>
              <ul>
                <li>
                  Agendamento online 24/7 para consultas e serviços
                  veterinários.
                </li>
                <li>
                  Armazenamento seguro de dados do paciente para fácil acesso.
                </li>
                <li>Suporte ao cliente por e-mail</li>
              </ul>
            </div>
            <div class="card-plan-price">
              <div class="value-card">
                <span>R$</span>
                <h1>39</h1>
                <span>,86 mensal</span>
              </div>
            </div>
            <div class="tag-value-card">
              <h6>ou R$ 227,00 anual</h6>
            </div>
            <div class="btn-buy-plan">
              <button>COMPRAR AGORA</button>
            </div>
          </div>
          <div class="card-plan">
            <div class="card-plan-img">
              <img src={Logoplan} alt="Plano 1" />
            </div>
            <div class="card-plan-info">
              <h1>Enterprise</h1>
              <span>
                Este plano intermediário oferece recursos aprimorados para
                melhorar a eficiência e o atendimento ao cliente. Perfeito para
                pequenas/médias clínicas
              </span>
              <ul>
                <li style={{ listSyle: "none" }}>
                  Todos os recursos do Plano Started, além de:
                </li>
                <li>
                  Integração com calendários externos para sincronização de
                  horários.
                </li>
                <li>
                  Funcionalidade de pagamento online para cobranças e faturas.
                </li>
              </ul>
            </div>
            <div class="card-plan-price">
              <div class="value-card">
                <span>R$</span>
                <h1>46</h1>
                <span>,86 mensal</span>
              </div>
            </div>
            <div class="tag-value-card">
              <h6>ou R$ 208,90 anual</h6>
            </div>
            <div class="btn-buy-plan">
              <button>COMPRAR AGORA</button>
            </div>
          </div>
          <div class="card-plan">
            <div class="card-plan-img">
              <img src={Logoplan} alt="Plano 1" />
            </div>
            <div class="card-plan-info">
              <h1>Franquias</h1>
              <span>
                Este plano premium é projetado para franquias que buscam
                alcançar excelência em todos os aspectos, desde a experiência do
                cliente até a eficiência operacional.
              </span>
              <ul>
                <li style={{ listSyle: "none" }}>
                  Todos os recursos do Plano Enterprise, além de:
                </li>
                <li>
                  Personalização avançada do perfil da clínica com branding
                  completo.
                </li>
                <li>
                  Integração com sistemas de gestão de saúde animal (SGHAs).
                </li>
              </ul>
            </div>
            <div class="card-plan-price">
              <div class="value-card">
                <span>R$</span>
                <h1>88</h1>
                <span>,86 mensal</span>
              </div>
            </div>
            <div class="tag-value-card">
              <h6>ou R$ 489,90 anual</h6>
            </div>
            <div class="btn-buy-plan">
              <button>COMPRAR AGORA</button>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter" class="newsletter-container">
        <div class="card-newsletter">
          <h1 class="title-card-newsletter">
            Receba novidades do vetcare consult
          </h1>
          <div class="container-input-label-card">
            <label>Nome completo ou companhia:</label>
            <input
              type="text"
              id="name-newsletter"
              name="name-newsletter"
              placeholder="Digite aqui o nome completo ou da companhia..."
              maxlength="150"
              required
            />
          </div>
          <div class="container-input-label-card">
            <label>E-mail:</label>
            <input
              type="email"
              id="email-newsletter"
              name="email-newsletter"
              placeholder="Ex: example@example.com..."
              required
            />
          </div>
          <div class="container-btn-newsletter">
            <button>INSCREVER-SE</button>
          </div>
        </div>
        <img src={Dogandcat} alt="Dog and Cat" class="dogandcat" />
      </section>
      <div class="overlay"></div>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <div class="header-modal">
            <h1>Menu</h1>
            <button class="close">x</button>
          </div>
          <div
            class="divider-modal"
            style={{ marginTop: "20px", marginBottom: "16px" }}
          ></div>
          <div class="content-modal-items">
            <button class="btn-header-info">Para profissionais</button>
            <div class="divider-modal"></div>
            <button class="btn-header-info">
              Pergunte ao Profissional de Saúde Animal
            </button>
            <div class="divider-modal"></div>
            <button class="btn-header-info">
              Ajuda e Suporte
              <img src={Helpicon} alt="Help Icon" class="icon-header-help" />
            </button>
            <div class="divider-modal"></div>
            <button class="btn-header-login">
              <img src={Usericon} alt="User Icon" class="icon-header-user" />
              Entrar na conta
            </button>
          </div>
        </div>
      </div>
      <footer class="footer-desc">
        <img src={LogoBranca} />
        <div class="div-elements-footer">
          <h1>ESPECIALIDADES</h1>
          <ul>
            <li>Clínica Geral Veterinária</li>
            <li>Cirurgia Veterinária</li>
            <li>Dermatologia Veterinária</li>
            <li>Cardiologia Veterinária</li>
            <li>Oncologia Veterinária</li>
          </ul>
        </div>
        <div class="divider-footer"></div>
        <div class="div-elements-footer">
          <h1>Unidades</h1>
          <ul>
            <li>Clinicão</li>
            <li>Rivelles</li>
            <li>Vet Quality</li>
            <li>A.M.E VET Clínica</li>
            <li>Clínica Animalis</li>
          </ul>
        </div>
      </footer>
      <footer class="footer-copyright">
        <span>
          Copyright ® 2024 VETCARE CONSULT - Todos os direitos reservados
        </span>
      </footer>
    </body>
  );
}

export default SelectAnimal;
