import React from "react";

import Card from "./Card";
import TimeSlotHeader from "./TimeSlotHeader";
import MedicationCard from "./MedicationCard";
import Button from "./button";


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
                    <div className="w-full flex justify-center items-center">
                        <div className="">
                            <Button 
                                texto='Editar'
                                status= 'pendente'
                            />
                        </div>
                    </div>
            </div>
            
        </Card>
    )
}