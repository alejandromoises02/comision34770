import React, { useEffect, useState } from "react";

const productos = [
  {nombre:"manzanas", id:0, categoria:"fruta", stock:10, precio:500},
  {nombre:"peras", id:1, categoria:"fruta", stock:20, precio:100},
  {nombre:"zanahorias", id:2, categoria:"verdura", stock:30, precio:200},
  {nombre:"calabaza", id:3, categoria:"verdura", stock:40, precio:300},
];

const obtenerProductos = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve(productos);
  }, 2000);
  //reject("ocurrio un error en la promesa")
})

export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos
    .then((data)=>{
      setProductos(data);
    })
    .catch((error)=>{
      console.log("salio todo mal");
      console.log(error);
    })
  }, [])
  

  return (
    <>
      <h1>{greeting}</h1>
      {
        productos.map((producto)=>
          <h2 key={producto.id}>{producto.nombre}</h2>
        )
      }
    </>
  );
};


