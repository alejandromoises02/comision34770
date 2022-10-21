import React, { useState, useContext } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CustomContext";
import { Login } from "@mui/icons-material";

const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { addItem } = useContext(Context);

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
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button>Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
