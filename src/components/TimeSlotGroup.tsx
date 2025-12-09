import Card from "./Card";
import TimeSlotHeader from "./TimeSlotHeader";
import MedicationCard from "./MedicationCard";

export type MedicationStatus = 'pendente' | 'tomado';

// Define a interface para os remedios
export type MedicationProps  = {
    id: string;
    nome: string;
    dosagem: string;
    horario: string;
    status: MedicationStatus;
}

// Define a interface para as props
type TimeSlotGroupProps = {
    titulo: string;
    icone: 'sun' | 'moon' | 'afternoon';
    medicamentos: MedicationProps[];
    apenasPendentes: boolean;
    modoEdicao: boolean;
    mode: "light" | "dark";
}



export default function TimeSlotGroup ({ titulo, icone, medicamentos, apenasPendentes, modoEdicao, mode}: TimeSlotGroupProps) {
    return (
        <Card mode={mode}>
            <TimeSlotHeader titulo = {titulo} icone={icone} mode={mode} />
            <div className="mt-4 flex flex-col gap-4">
                {medicamentos.map((medicamentos)=>
                    <MedicationCard 
                        key = {medicamentos.id}
                        nome = {medicamentos.nome}
                        dosagem = {medicamentos.dosagem}
                        status = {medicamentos.status}
                        horario = {medicamentos.horario}
                        apenasPendentes={apenasPendentes}
                        modoEdicao={modoEdicao}
                        mode={mode}
                    />
                    )}  
            </div>
        </Card>
    )
}