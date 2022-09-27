import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  let nombre = "Luis";

  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Fernandez" />
    </>
  );
};

export default App;
