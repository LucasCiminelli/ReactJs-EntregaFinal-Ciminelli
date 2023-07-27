import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Spinner } from "./Spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setItem({ ...res.data(), id: res.id });
        } else {
          setItem(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching document:", error);
        setItem(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner/>
    
  }


  if (!item){
    return <div className="text-center w-100 h-100 my-5 py-5">
      <h2 className="pb-3">Product not found</h2>
        <h6>Please go back to the store</h6>
        <p><Link to="/products" element="{ItemListContainer}">Click Here</Link></p>
      </div>
  }

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
