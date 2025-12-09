type ButtonProps = {
  texto: string;
  textoAtivo?: string;
  status?: 'tomado' | 'pendente' | 'excluir';
  tipo?: 'simples' | 'alterna';
  onClick?: () => void; //add prop opcional pra permitir que o componente pai defina o que acontece ao clicar
}

export default function Button({ texto, status = 'pendente' , textoAtivo = "Tomado", tipo, onClick}: ButtonProps) {

  if (status === 'excluir') {
    return (
      <button onClick={onClick} className='bg-red-600 text-white font-semibold text-lg shadow-md hover:bg-red-700 rounded-full transition w-8 h-8 flex items-center justify-center'> x </button>
    )
  }
  
  if (status === 'tomado') {
    return (
      <button onClick={onClick} className="bg-[#12b36d] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#10a564] transition">
        {textoAtivo}
      </button>
    );
  }

  if( status  === 'pendente')
   return (
     <button onClick={onClick} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
       {texto}
     </button>
   );
  
}
