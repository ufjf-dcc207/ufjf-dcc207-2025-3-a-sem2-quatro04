import React from "react";

import Card from "./Card";
import TimeSlotHeader from "./TimeSlotHeader";
import MedicationCard from "./MedicationCard";


export type MedicationStatus = 'pendente' | 'tomado';

// Define a interface para os remedios
export interface MedicationProps {
    id: string;
    nome: string;
    dosagem: string;
    horario: string;
    status: MedicationStatus;
}

// Define a interface para as props
interface TimeSlotGroupProps {
    titulo: string;
    icone: 'sun' | 'moon' | 'afternoon';
    medicamentos: MedicationProps[];
}

export default function TimeSlotGroup ({ titulo, icone, medicamentos}: TimeSlotGroupProps) {
    return (
        <Card>
            <TimeSlotHeader titulo = {titulo} icone={icone} />
            <div className="mt-4 flex flex-col gap-4">
                {medicamentos.map((medicamentos)=>
                    <MedicationCard 
                        key = {medicamentos.id}
                        nome = {medicamentos.nome}
                        dosagem = {medicamentos.dosagem}
                        status = {medicamentos.status}
                        horario = {medicamentos.horario}
                    />
                    )}
            </div>
        </Card>
    )
}