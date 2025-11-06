import { type ReactNode } from "react";

//define o formato do componente card
export type CardProps = {
  children: ReactNode;
  className?: string;
}

//:CardProps é o tipo esperado pra cada prop dessa (titulo, imagem e descricao)
export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}