import React, { useContext, useState } from "react";
import {Container} from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { carrito, handleAgregar } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <>
      <Container fluid className="px-0 mx-0">
       
          <div className="detail-container d-flex justify-content-center   py-5 flex-wrap ">
            <div className="">
              <img className="detail-img px-0 mx-0" src={item.image} alt={item.title} />
            </div>
            <div className="detail-info  d-flex flex-column pt-3">
              <h3>{item.title}</h3>
              <p>{item.type}</p>
              <p className="description">{item.description}</p>
              <p>${item.price}</p>
              <ItemCount
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={() => {
                  handleAgregar(item, cantidad);
                }}
              />
            </div>
          </div>
          <div className="detail-end d-flex flex-row flex-wrap mt-3 pt-3 align-items-center">
            <div className="  mt-3 text-center">
              <i className="bi bi-truck"></i>
              <h6>
                WE SHIP YOUR PURCHASE <br />
                <p>Free deliveries to all the country</p>
              </h6>
            </div>
            <div className="  mt-3 text-center">
              <i className="bi bi-credit-card"></i>
              <h6>
                PAY AS YOU WISH
                <br /> <p>All payment methods</p>
              </h6>
            </div>
            <div className="  mt-3 text-center">
              <i className="bi bi-chat-square-heart"></i>
              <h6>
                WE ARE MANUFACTURERS
                <br /> <p>Wholesale and retail sales</p>
              </h6>
            </div>
          </div>
        
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fcf6f6"
          fill-opacity="1"
          d="M0,288L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default ItemDetail;
