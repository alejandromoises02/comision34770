import React from "react";
import ItemCount  from "../Components/ItemCount/ItemCount";

export const ItemListContainer = ({ greeting, mansaje }) => {

  const onAdd = (count) => {
    console.log(`El usuaro quiere agregar ${count} productos`);
  };

  return (
    <>
      <h1>{greeting}</h1>
      <h1>{mansaje}</h1>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </>
  );
};
