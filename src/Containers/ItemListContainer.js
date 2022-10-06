import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <>
      <h1>{greeting}</h1>
      {
        <>
          {loading ? <h1>Cargando...</h1> : <ItemList products={products} />}
        </>
      }
    </>
  );
};
