import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"

export const Cart = ({ estilo, color }) => {
  const { cart, total, clear } = useContext(Context);

  const comprador = {
    nombre: 'Gaston',
    apellido: 'Rodri',
    email: 'tonga@tonga.com'
  };

  const finalizarCompra = ()=>{
    const ventasCollection = collection(db,"ventas");
    addDoc(ventasCollection,{
      comprador,
      items:[{nombre:'banana'},{nombre:'pera'}],
      total: 200,
      date:serverTimestamp()
    })
    .then(result=>{
      console.log(result.id);
    })
    .catch(e => {
      console.log('todo mal');
      console.log(e);
    });
    
    clear();
  }

  const actualizarStock = ()=>{
    const updateStock = doc(db, "productos","KwnjSlyDslt1IneySzVr")
    updateDoc(updateStock,{stock:100})
  }


  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1 className={estilo ? "red" : "green"}>
            No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
          </h1>
          <h2 className={`tamanio ${color || ''}`}>Gracias por tu visita</h2>
        </>
      ) : (
        <>
          {cart.map((producto) => (
            <h1 key={producto.id}>{producto.title}</h1>
          ))}
        </>
      )}
      <button onClick={actualizarStock}>finalizar compra</button>
    </>
  );
};
