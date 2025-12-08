import { useState } from 'react';

type ButtonProps = {
  texto: string;
  textoAtivo?: string;
  status?: 'tomado' | 'pendente' | 'excluir';
  tipo?: 'simples' | 'alterna';
  onClick?: () => void; //add prop opcional pra permitir que o componente pai defina o que acontece ao clicar
}

export default function Button({ texto, status = 'pendente' , textoAtivo = "Tomado", tipo, onClick}: ButtonProps) {
  
  const [isClicked, setIsClicked] = useState(status);

  function toNext(){

    if (tipo === 'simples' || status === 'excluir') {
      return; 
    }

      switch (isClicked){
        case "pendente":
            setIsClicked("tomado");
            break;
        case "tomado":
            setIsClicked("pendente");
            break;
      }
  }
  //o clique chama onClick se exisitir OU toNext
  const tratarClick = onClick || toNext;

  if (status === 'excluir') {
    return (
      <button onClick={tratarClick} className='bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition'> {texto} </button>
    )
  }
  
  if (isClicked === 'tomado') {
    return (
      <button onClick={tratarClick} className="bg-[#12b36d] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#10a564] transition">
        {textoAtivo}
      </button>
    );
  }

  if( isClicked  === 'pendente')
   return (
     <button onClick={tratarClick} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
       {texto}
     </button>
   );
  
}
