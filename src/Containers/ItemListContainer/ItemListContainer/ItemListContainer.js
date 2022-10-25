import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams(); //si es un undefined entonces no recibio ningun params

  const URL_BASE = "https://fakestoreapi.com/products";
  const URL_CAT = `${URL_BASE}/category/${id}`;

  
  const productCollection = collection(db, "productos");
  const q = query(productCollection, where('category', '==', "women's clothing" ))

  useEffect(() => {
    getDocs(productCollection)
    .then((result) => {
      const listProducts = result.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setProducts(listProducts);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false));

    /*const getProducts = async () => {
      try {
        const res = await fetch(id ? URL_CAT : URL_BASE);
        const data = await res.json();
        const productos = data.map(item => {
          return {...item, stock:Math.floor(Math.random() * 50)}
        });
        console.log(productos);
        setProducts(productos);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();*/

    /*
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));*/
  }, [id, URL_BASE, URL_CAT]);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
    </>
  );
};
