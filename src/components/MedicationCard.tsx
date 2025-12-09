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
}

export default function MedicationCard({ nome, dosagem, horario, status }: MedicationCardProps) {
  
  const [isClicked, setIsClicked] = useState(status);

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

  //controla se o card deve estar visivel (inicialmente sim)
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false)
  
  function cardOff () {
    setIsVisible(false);
  }

  function mouseEnter () {
    setIsHovering(true);
  }

  function mouseExit() {
    setIsHovering(false);
  }

  if (!isVisible) return null;

  const isTaken = isClicked === 'tomado';

  const buttonDelete = isHovering ? (
    <Button 
      texto = {'Excluir'}
      status = 'excluir'
      onClick={cardOff}
      tipo='simples'
    />
  ) : null


  if (isTaken) {
  return (
    <div 
      onMouseEnter = {mouseEnter}
      onMouseLeave = {mouseExit}
      className='mb-4'
        >
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
          <Button 
            texto={'Tomado'}
            status='tomado'
            onClick={toNext}
          />
        </div>
      </div>
    </Card>
    <div className='flex justify-center mt-2'>{buttonDelete}</div>
    </div>
  );
  } else {
    return (
      <div
        onMouseEnter = {mouseEnter}
        onMouseLeave = {mouseExit}
        className='mb-4'
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
          <Button 
            texto={'Tomar'}
            status = 'pendente'
            onClick={toNext}
          />
        </div>
      </div>
    </Card>
    <div className='flex justify-center mt-2'>{buttonDelete}</div>
    </div>
    );
  }
}