import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(URL_CAT);
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();

    /*
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));*/
  }, [id]);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
    </>
  );
};
