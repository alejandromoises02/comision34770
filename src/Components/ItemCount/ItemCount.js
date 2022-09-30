import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };


  return (
    <div>
      <button onClick={subtract}>-</button>
      <h2>{count}</h2>
      <button onClick={add}>+</button>
      <button disabled={stock === 0} onClick={()=>onAdd(count)}>
        <span>{stock === 0 ? 'No tenemos stock' : 'Agrega al carrito'}</span>
      </button>
    </div>
  );
};

export default ItemCount;







