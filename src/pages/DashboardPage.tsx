import dadosPlano from "../data/dadosPlano.json";
import PatientHeader from '../components/PatientHeader';
import TimeSlotGroup from '../components/TimeSlotGroup';
import Button from '../components/button';
import {useState } from "react";

export default function DashboardPage() {

  const [isDarkMode, setIsDarkMode] = useState('light');
  const [apenasPendentes, setApenasPendentes] = useState(false);
  const [isEditingMode, setIsEditingMode] = useState(false);

  function toDarkMode(){
      switch (isDarkMode){
        case "light":
            setIsDarkMode("dark");
            break;
        case "dark":
            setIsDarkMode("light");
            break;
      }
  }

  function toggleFiltro() {
    setApenasPendentes(!apenasPendentes);
  }

  function toEditingMode() {
    setIsEditingMode(!isEditingMode);
  }

  const isDark = isDarkMode === 'dark'; 
  const editButtonText = isEditingMode? "Concluir Edição" : "Editar";
  const editButtonStatus = "pendente";

  if( isDark ){
     return (
    <div className="min-h-screen bg-linear-to-br from-[#2c2b4f] to-[#111d2d] flex flex-col items-center p-6">
      
      <div className="max-w-6xl w-full">
        
        <div className="flex justify-end mb-4 gap-4">

          <Button 
            texto={apenasPendentes ? "Mostrar Todos" : "Ocultar Concluídos"}
            status="pendente"
            onClick={toggleFiltro} 
          />
          
          <Button
            texto="☀️"
            status="pendente"
            onClick={toDarkMode} 
          />
        </div>

        <PatientHeader 
          paciente={dadosPlano.paciente}
          mode = 'dark'
         />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          {dadosPlano.horarios.map((horario) => (
            
            <TimeSlotGroup
              key={horario.id}
              titulo={horario.titulo}
              icone={horario.icone as "sun"|"afternoon"|"moon"}
              medicamentos={horario.medicamentos as any}
              apenasPendentes={apenasPendentes}
              modoEdicao = {isEditingMode}
              mode = {isDark? 'dark' : 'light'}
            />
          ))}
        </div>
          <div className="mt-8 w-full flex justify-center">
          <Button texto={editButtonText} status={editButtonStatus} tipo="simples" onClick={toEditingMode}/>
        </div>
      </div>
    </div>
  );
  
  } else {
    return (
    <div className="min-h-screen bg-linear-to-br from-[#d7e1ea] to-[#B2D4ED] flex flex-col items-center p-6">
      
      <div className="max-w-6xl w-full">
        
        <div className="flex justify-end mb-4 gap-4">

          <Button 
            texto={apenasPendentes ? "Mostrar Todos" : "Ocultar Concluídos"}
            status="pendente"
            onClick={toggleFiltro} 
          />

          <Button 
            texto="🌙"
            status="pendente"
            onClick={toDarkMode} 
          />
        </div>
        
        <PatientHeader 
          paciente={dadosPlano.paciente}
          mode = 'light'
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          {dadosPlano.horarios.map((horario) => (
            
            <TimeSlotGroup
              key={horario.id}
              titulo={horario.titulo}
              icone={horario.icone as "sun"|"afternoon"|"moon"}
              medicamentos={horario.medicamentos as any}
              apenasPendentes={apenasPendentes}
              modoEdicao = {isEditingMode}
              mode = {isDark? 'dark' : 'light'}
            />
          ))}
        </div>
          <div className="mt-8 w-full flex justify-center">
          <Button texto={editButtonText} status={editButtonStatus} tipo="simples" onClick={toEditingMode}/>
        </div>
      </div>
    </div>
  );
}
}