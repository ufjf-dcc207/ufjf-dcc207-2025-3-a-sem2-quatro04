import React from "react";

type ButtonProps = {
  texto: string;
  status?: 'tomado' | 'pendente';
}

export default function Button({ texto, status = 'pendente' }: ButtonProps) {
  
  if (status === 'tomado') {
    return (
      <button className="bg-[#12b36d] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#10a564] transition">
        {texto}
      </button>
    );
  }
  return (
    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
      {texto}
    </button>
  );
}
