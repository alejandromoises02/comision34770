import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from './Containers/ItemListContainer'

const App = () => {
  const mensaje = "Las mejores ofertas"

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={mensaje} />
    </>
  );
};

export default App;
