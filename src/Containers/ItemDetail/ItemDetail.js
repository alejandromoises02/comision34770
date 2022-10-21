import React, { useState, useContext } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CustomContext";


const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { cart, addItem, IsInCart} = useContext(Context);

  let stock = 0;
  if(IsInCart(product.id)){
    const found = cart.find(item => item.id === product.id);
    stock = product.stock - found.cantidad;
  }else{
    stock = product.stock;
  }

  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(product, count);
  };

  return (
    <div>
      <img alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h2>{product.price}</h2>
      {!isPressedButton ? (
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button>Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
