import React from "react";
import logo from "../../assets/logo.jpeg";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";

const Navbar = () => {


  const categorias = [
    {nombre:"Categoria 1", id:0, ruta:"#"},
    {nombre:"Categoria 2", id:1, ruta:"#"},
    {nombre:"Categoria 3", id:2, ruta:"#"},
  ];

  return (
    <header style={styles.container}>
      <img style={styles.imagenes} src={logo} alt="tienda online" />
      <h1>Bienvendio</h1>
      <nav>
        {
          categorias.map((categoria)=>{
            return <a key={categoria.id} style={styles.categorias} href={categoria.ruta}>{categoria.nombre}</a>
          })
        }
      </nav>
      <CartWidget />
    </header>
  );
};

export default Navbar;


