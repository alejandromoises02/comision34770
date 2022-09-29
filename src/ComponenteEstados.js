import React, { useState } from "react";

export const ComponenteEstados = ({stock, initial, onAdd}) => {
  const [contador, setContador] = useState(1);

  const handlerClickSumar = () => {
    setContador(contador + 1);
  };

  const handlerClickRestar = () =>{
    setContador(contador - 1);
  }

  const handlerClickReset = () =>{
    setContador(1);
    onAdd()
  }

  return (
    <div>
      <h1>Componente para los estados</h1>
      <h1>{contador}</h1>
      <button onClick={handlerClickSumar}>Sumar</button>
      <button onClick={handlerClickRestar}>Restar</button>
      <button onClick={handlerClickReset}>Restar</button>
    </div>
  );
};



