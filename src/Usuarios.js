import React, { useState } from "react";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([
    { nombre: "Nicolas" },
    { nombre: "Jonatan" },
  ]);

  //const [nombre, setNombre] = useState("")

  const mariano = { nombre: "Mariano" };

  const agregarMariano = () => {
    setUsuarios([...usuarios, mariano]);
    //setUsuarios([...usuarios,{nombre}])
  };

  /*const manejarAgregar = (e)=>{
    setNombre(e.target.value);
  }*/

  return (
    <div>
      <h1>Usuarios</h1>
      <button onClick={agregarMariano}>Agregar a Mariano</button>
      {usuarios.map((usuario, indice) => (
        <h1 key={indice}>{usuario.nombre}</h1>
      ))}
      {/*<input onChange={manejarAgregar} type="text" />*/ }
    </div>
  );
};
