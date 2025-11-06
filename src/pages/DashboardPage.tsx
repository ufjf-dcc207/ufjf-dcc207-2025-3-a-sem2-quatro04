import dadosPlano from "../data/dadosPlano.json";
import PatientHeader from '../components/PatientHeader';
import TimeSlotGroup from '../components/TimeSlotGroup';
import Button from '../components/button';

export default function DashboardPage() {

  return (
    <div className="min-h-screen bg-linear-to-br from-[#d7e1ea] to-[#B2D4ED] flex flex-col items-center p-6">
      
      <div className="max-w-6xl w-full">
        
        <PatientHeader paciente={dadosPlano.paciente} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          {dadosPlano.horarios.map((horario) => (
            
            <TimeSlotGroup
              key={horario.id}
              titulo={horario.titulo}
              icone={horario.icone as "sun"|"afternoon"|"moon"}
              medicamentos={horario.medicamentos as any}
            />
          ))}
        </div>
          <div className="mt-8 w-full flex justify-center">
          <Button texto="Editar" status="pendente" />
        </div>
      </div>
    </div>
  );
}