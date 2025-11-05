import Icon from "./Icon";
import { Subheading } from "./Typography";

type TimeSlotHeaderProps = {
    titulo: string;
    icone: "sun" | "afternoon" | "moon";
}

export default function TimeSlotHeader ({titulo, icone}: TimeSlotHeaderProps) {
    return (
        <div className="flex items-center justify-center gap-2 p-2 bg-blue-50 rounded-lg shadow-sm">
            {/* mostra o emoji e aumenta o tamanho dele */}
            <Icon name={icone} className="text-2xl"/> 
            {/* mostra o subtitulo */}
            <Subheading>{titulo}</Subheading>
        </div>
    )
}