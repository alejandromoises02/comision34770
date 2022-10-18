import React from "react";

export const ComponenteEventos = () => {
  const callback = (event) => {
    //console.log(event.target);
    console.log("Click en el boton");
    event.stopPropagation();
  };

  const handlerChange = (event) =>{
    console.log(event.target);
    console.dir(event.target);
    console.log(event.target.value);
    event.target.value = '';
  }

  const handlerClickAnchor = (event)=>{
    event.preventDefault();
    console.log("comportamiento prevenido");
  }

  const handlerClickDiv = ()=>{
    console.log("click en el div");
  }

  return (
    <div onClick={handlerClickDiv}>
      <h1>ComponenteEventos</h1>
      <button id="boton" onClick={callback}>Click</button>
      <button id="boton2" onClick={callback}>Click</button>
      <input type="text" onChange={handlerChange}/>
      <a onClick={handlerClickAnchor} href="https://github.com/">Ir a github</a>
    </div>
  );
};
