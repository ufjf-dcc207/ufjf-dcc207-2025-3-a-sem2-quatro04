import { Avatar } from "./Avatar";
import { Heading, BodyText } from "./Typography";
import Button from "./button";

type Paciente = {
  nome: string;
  fotoUrl: string;
};

type PatientHeaderProps = {
  paciente: Paciente;
};

export default function PatientHeader({ paciente }: PatientHeaderProps) {
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

      <Button texto="Adicionar Medicamento" />
    </div>
  );
}
