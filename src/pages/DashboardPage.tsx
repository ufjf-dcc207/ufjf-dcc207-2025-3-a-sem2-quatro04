import React from 'react';

import dadosPlano from "../data/dadosPlano.json";
import PatientHeader from '../components/PatientHeader';
import TimeSlotGroup from '../components/TimeSlotGroup';

export default function DashboardPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcfafa] to-[#cddeea] flex flex-col items-center p-6">
      
      <div className="max-w-6xl w-full">
        
        <PatientHeader paciente={dadosPlano.paciente} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          {dadosPlano.horarios.map((horario) => (
            
            <TimeSlotGroup
              key={horario.id}
              titulo={horario.titulo}
              icone={horario.icone as "sun"|"afternoon"|"moon"} // Erro crítico para produção
              medicamentos={horario.medicamentos} // Erro crítico para produção
            />
          ))}
        </div>

      </div>
    </div>
  );
}