import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "productos");
    const refDoc = doc(productCollection, id);

    getDoc(refDoc)
      .then((result) => {
        setProduct({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));

    /*const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/" + id)
        const data = await res.json();
        setProduct(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();*/
  }, [id]);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};
