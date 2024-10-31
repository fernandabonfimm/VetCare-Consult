CREATE TABLE `Agendamento` (
  `AgendamentoID` int PRIMARY KEY AUTO_INCREMENT,
  `Nome` varchar(255),
  `NomeAnimal` varchar(255),
  `Telefone` varchar(20),
  `Email` varchar(255),
  `DataAgendamento` date,
  `HorarioAgendamento` time,
  `EspecialistaID` int,
  `ClinicaID` int
);

CREATE TABLE `Especialista` (
  `EspecialistaID` int PRIMARY KEY AUTO_INCREMENT,
  `Nome` varchar(255),
  `Email` varchar(255),
  `Telefone` varchar(20),
  `CPF_CNPJ` varchar(20),
  `Especialidade` varchar(255),
  `ClinicaID` int,
  `Autonomo` boolean,
  `CRMV` varchar(20),
  `HorariosDisponiveis` datetime,
  `DatasDisponiveis` date
);

CREATE TABLE `Clinica` (
  `ClinicaID` int PRIMARY KEY AUTO_INCREMENT,
  `Nome` varchar(255),
  `Endereco` varchar(255),
  `Email` varchar(255),
  `Telefone` varchar(20),
  `CPF_CNPJ` varchar(20),
  `Atendimento24Horas` boolean,
  `AtendimentoComercial` boolean,
  `Especialidade` varchar(255),
  `Descricao` text
);

CREATE TABLE `Horarios` (
  `HorarioID` int PRIMARY KEY AUTO_INCREMENT,
  `EspecialistaID` int,
  `ClinicaID` int,
  `HorarioOcupado` datetime,
  `HorarioDisponivel` datetime
);

CREATE TABLE `Datas` (
  `DataID` int PRIMARY KEY AUTO_INCREMENT,
  `EspecialistaID` int,
  `ClinicaID` int,
  `DataOcupada` date,
  `DataDisponivel` date
);

ALTER TABLE `Agendamento` ADD FOREIGN KEY (`EspecialistaID`) REFERENCES `Especialista` (`EspecialistaID`);

ALTER TABLE `Agendamento` ADD FOREIGN KEY (`ClinicaID`) REFERENCES `Clinica` (`ClinicaID`);

ALTER TABLE `Especialista` ADD FOREIGN KEY (`ClinicaID`) REFERENCES `Clinica` (`ClinicaID`);

ALTER TABLE `Especialista` ADD FOREIGN KEY (`HorariosDisponiveis`) REFERENCES `Horarios` (`HorarioDisponivel`);

ALTER TABLE `Especialista` ADD FOREIGN KEY (`DatasDisponiveis`) REFERENCES `Datas` (`DataDisponivel`);

ALTER TABLE `Horarios` ADD FOREIGN KEY (`EspecialistaID`) REFERENCES `Especialista` (`EspecialistaID`);

ALTER TABLE `Horarios` ADD FOREIGN KEY (`ClinicaID`) REFERENCES `Clinica` (`ClinicaID`);

ALTER TABLE `Datas` ADD FOREIGN KEY (`EspecialistaID`) REFERENCES `Especialista` (`EspecialistaID`);

ALTER TABLE `Datas` ADD FOREIGN KEY (`ClinicaID`) REFERENCES `Clinica` (`ClinicaID`);
