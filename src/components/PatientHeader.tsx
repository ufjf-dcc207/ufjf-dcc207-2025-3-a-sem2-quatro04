import { Avatar } from "./Avatar";
import { Heading, BodyText } from "./Typography";
import Button from "./button";

type Paciente = {
  nome: string;
  fotoUrl: string;
};

type PatientHeaderProps = {
  paciente: Paciente;
  mode: 'dark' | 'light';
};

export default function PatientHeader({ paciente, mode}: PatientHeaderProps) {
  if(mode === 'light'){
  return (
    <div className="flex items-center justify-between p-4 mb-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
      <Avatar src={paciente.fotoUrl} alt={paciente.nome} />
        <div>
          <Heading>{`Olá, ${paciente.nome}!`}</Heading>
          <BodyText>
            Plano de Medicação de Hoje
          </BodyText>
        </div>
      </div>

      <Button texto="Adicionar Medicamento" tipo="simples" />
    </div>
  );
} else {
  return (
  <div className="flex items-center justify-between p-4 mb-6 bg-[#303b58] rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
      <Avatar src={paciente.fotoUrl} alt={paciente.nome}/>
        <div>
          <Heading className="text-white">{`Olá, ${paciente.nome}!`}</Heading>
          <BodyText className="text-white">
            Plano de Medicação de Hoje
          </BodyText>
        </div>
      </div>

      <Button texto="Adicionar Medicamento" tipo="simples" />
    </div>
  );
}
}
