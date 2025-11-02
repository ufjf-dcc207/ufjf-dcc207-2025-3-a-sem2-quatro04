import React from 'react';

import { Avatar } from './Avatar';
import { Heading, BodyText } from './Typography';

type Paciente = {
  nome: string;
  fotoUrl: string;
}

type PatientHeaderProps = {
  paciente: Paciente;
}

export default function PatientHeader({ paciente }: PatientHeaderProps) {
  return (
    <div className="flex items-center p-4 mb-6 bg-blue-50 rounded-lg shadow-sm">
      
      <Avatar src={paciente.fotoUrl} alt={paciente.nome} />

      <div className="ml-4">
        
        <Heading className="!text-2xl">
          {`Olá, ${paciente.nome}!`}
        </Heading>
        
        <BodyText className="!text-base text-gray-600">
          Plano de Medicação de Hoje
        </BodyText>
      </div>

    </div>
  );
}