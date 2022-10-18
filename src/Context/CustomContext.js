import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cantidad = 0;
    const totalC = 0;
    cart.forEach((item) => {
      cantidad += item.cantidad;
      totalC += item.price * item.cantidad;
    });
    setQty(cantidad);
    setTotal(totalC);
  }, [cart]);

  const addItem = (item, cantidad) => {
    console.log(item);
    console.log(
      `esta funcion se encarga de agregar ${cantidad} cantidades del producto ${item} al carrito`
    );
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const IsInCart = (id) => cart.some((item) => item.id === id);

  const clear = () => {
    setCart([]);
    setQty(0);
    setTotal(0);
  };

  return (
    <Context.Provider value={{ cart, qty, total, addItem, deleteItem, clear }}>
      {children}
    </Context.Provider>
  );
};
