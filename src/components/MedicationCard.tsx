import React from 'react';


import Card from './Card'; 
import Icon from './Icon';
import { Subheading, BodyText } from './Typography'; 
import Button from './button';

// define as props que o MedicationCard espera (apenas dados visuais)
export type MedicationCardProps = {
  nome: string;
  dosagem: string;
  horario: string;
  status: 'tomado' | 'pendente';
}

export default function MedicationCard({ nome, dosagem, horario, status }: MedicationCardProps) {
  
  const isTaken = status === 'tomado';

  return (
    <Card 
      className={`transition-all ${isTaken ? 'opacity-50 bg-gray-50' : ''}`}
    >
      <div className="flex items-center w-full">
        
        <Icon name="pill" className="text-2xl mr-4" /> 
        
        <div className="flex-grow">
          <Subheading>{nome}</Subheading> 
          <BodyText className="!text-sm text-gray-500">{dosagem} • {horario}</BodyText> 
        </div>

        <div className="ml-auto">
          <Button 
            texto={isTaken ? 'Tomado' : 'Tomar'}
          />
        </div>
        
      </div>
    </Card>
  );
}