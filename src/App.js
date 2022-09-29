import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from './Containers/ItemListContainer'
import {ComponenteEstados} from './ComponenteEstados'
import {Usuarios} from './Usuarios'

const App = () => {
  const nombre = "Luis";
  const mensaje = "Hola a todos los que se quedaron a los postcreditos"

  const onAdd =() => {
    console.log("agregaste algo al carrito");
  }

  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Fernandez" />
      <ItemListContainer greeting={mensaje} mansaje="eso es toddy la preentrega"/>
      <Usuarios />
      <ComponenteEstados stock={5} initial={1} onAdd={onAdd}/>
    </>
  );
};

export default App;
