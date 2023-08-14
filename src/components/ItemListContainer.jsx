import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "./Spinner";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const [title, setTitle] = useState("Productos");

  const category = useParams().type;

  useEffect(() => {
    const prodRef = collection(db, "products");

    const q = category
      ? query(prodRef, where("type", "==", category))
      : prodRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((prod) => {
          return { ...prod.data(), id: prod.id };
        })
      );
      setTitle(category || "Products");
    });
  }, [category]);

  return (
    <>
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center w-100">
          {productos.length === 0 ? (
            <Spinner />
          ) : (
            <ItemList productos={productos} title={title} />
          )}
        </div>
        
      </Container>
      <div className="newsletter ms-0 me-0 ps-0 pe-0">
          <h3>Suscribe to our Newsletter</h3>
          <div className="newsletter2">
            <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button>Suscribe!</button>
          </div>
          
        </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fcf6f6"
          fillOpacity="1"
          d="M0,288L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default ItemListContainer;
