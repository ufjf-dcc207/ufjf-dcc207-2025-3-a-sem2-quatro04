import React, {useState} from 'react';
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
  apenasPendentes?: boolean;
  modoEdicao: boolean;
}

export default function MedicationCard({ nome, dosagem, horario, status, apenasPendentes = false, modoEdicao }: MedicationCardProps) {
  
  const [isClicked, setIsClicked] = useState(status);

  //controla se o card deve estar visivel (inicialmente sim)
  const [isVisible, setIsVisible] = useState(true);
  
  function toNext(){

      switch (isClicked){
        case "pendente":
            setIsClicked("tomado");
            break;
        case "tomado":
            setIsClicked("pendente");
            break;
      }
  }
  
  function cardOff () {
    setIsVisible(false);
  }

  if (apenasPendentes && isClicked === 'tomado') {
    return null;
  }

  if (!isVisible) return null;

  const isTaken = isClicked === 'tomado';

  const buttonDelete = modoEdicao ? (
    <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 z-10">
    <Button 
      texto = {'Excluir'}
      status = 'excluir'
      onClick={cardOff}
      tipo='simples'
    />
    </div>
  ) : null


  if (isTaken) {
  return (
    <div className='mb-4 relative'>
      {buttonDelete}
    <Card 
      className="opacity-50 border border-gray-300"
    >
      <div className="flex items-center w-full">
        
        <Icon name="pill" className="text-2xl mr-4" /> 
        
        <div>
          <Subheading>{nome}</Subheading> 
          <BodyText className="text-sm text-gray-500">{dosagem} • {horario}</BodyText> 
        </div>

        <div className="ml-auto flex items-center space-x-2">
          {buttonDelete}
          <Button 
            texto={'Tomado'}
            status='tomado'
            onClick={toNext}
          />
        </div>
      </div>
    </Card>
    <div className='absolute'>{buttonDelete}</div>
    </div>
  );
  } else {
    return (
      <div
        className='mb-4 relative'
        >
    <Card 
      className="border border-gray-200"
    >
      <div className="flex items-center w-full">
        
        <Icon name="pill" className="text-2xl mr-4" /> 
        
        <div>
          <Subheading>{nome}</Subheading> 
          <BodyText className="text-sm">{dosagem} • {horario}</BodyText> 
        </div>

        <div className="ml-auto flex items-center space-x-2">
          {buttonDelete}
          <Button 
            texto={'Tomar'}
            status = 'pendente'
            onClick={toNext}
          />
        </div>
      </div>
    </Card>
    </div>
    );
  }
}