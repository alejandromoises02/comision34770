import React, { useState, useContext } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CustomContext";

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addItem } = useContext(Context);

  const onAdd = (count) => {
    addItem(product, count);
    setShowItemCount(false);
  };

  return (
    <div>
      <img alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h2>{product.price}</h2>
      {showItemCount ? (
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      ) : (
        <Link to={'/cart'}>
          <button>Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
