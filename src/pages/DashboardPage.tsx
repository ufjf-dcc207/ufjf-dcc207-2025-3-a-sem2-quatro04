import React from 'react';

import dadosPlano from "../data/dadosPlano.json";
import PatientHeader from '../components/PatientHeader';
import MedicationCard from '../components/MedicationCard';

export default function DashboardPage() {

  const paciente = dadosPlano.paciente;
  const remedioManha = dadosPlano.horarios[0].medicamentos[0]; // Omeprazol
  const remedioTarde = dadosPlano.horarios[1].medicamentos[0]; // Paracetamol

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      
      <div className="max-w-2xl w-full">
        <h2 className="text-xs font-semibold text-gray-500 mb-2 uppercase">Testando: PatientHeader.tsx</h2>
        <PatientHeader paciente={paciente} />
        <h2 className="text-xs font-semibold text-gray-500 mt-8 mb-2 uppercase">Testando: MedicationCard.tsx</h2>
        
        <div className="flex flex-col gap-4">
          <MedicationCard
            key={remedioManha.id}
            nome={remedioManha.nome}
            dosagem={remedioManha.dosagem}
            horario={remedioManha.horario}
            status={remedioManha.status} // "pendente"
          />
          
          <MedicationCard
            key={remedioTarde.id}
            nome={remedioTarde.nome}
            dosagem={remedioTarde.dosagem}
            horario={remedioTarde.horario}
            status="tomado" // Forçado para "tomado"
          />
        </div>
      </div>
    </div>
  );
}