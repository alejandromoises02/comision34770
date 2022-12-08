import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const Cart = ({ estilo, color }) => {
  const { cart } = useContext(Context);

  const comprador = {
    nombre:'Ariel',
    apellido: 'Perez',
    mail: 'ap@ap.com'
  };

  const finalizarCompra = () => {
    const ventasCollecition = collection(db,'ventas2');
    addDoc(ventasCollecition,{
      comprador,
      items: [{nombre:'banana'},{nombre:'pera'}],
      total: 300,
      date:serverTimestamp()
    })
    .then(respuesta => console.log(respuesta.id))

    //TODO: foreach de cart y usar en cada iteracion la funcion actualizarstock pasandole el id de cada producto y el nuevo stock, producto.stock - produco.cantidad

    actualizarStock(cart.id, cart.stock)
  }

  const actualizarStock = (id,stockNuevo)=>{
    const updateStock = doc(db,'productos',id)
    updateDoc(updateStock,{stock:stockNuevo})
  }

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1 className={estilo ? "rojo" : "verde"}>
            Aun no agregaste productos a tu carrito, puedes ver productos
            <Link to="/">ACA</Link>
          </h1>
          <h2 className={`estiloBase ${color || ''}`} >Gracias por tu visita</h2>
        </>
      ) : (
        <>
          {cart.map((producto) => {
            <h1 key={producto.id}>{producto.nombre}</h1>;
          })}
        </>
      )}
      <button onClick={finalizarCompra}>Finalizar Compra</button>
      <button onClick={actualizarStock}>Actualizar Stock</button>
    </>
  );
}; 
