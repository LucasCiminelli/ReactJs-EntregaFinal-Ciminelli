import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, totalPrice, emptyCart, deleteItem, handleRestaCart, handleSumaCart} =
    useContext(CartContext);

  const handleVaciar = () => {
    emptyCart();
  };

  const handleDelete = (prod) => {
    deleteItem(prod.id);
  };

  

  return (
    <>
      <div>
        <h2 className="pt-5 ps-5">Cart </h2>

        {carrito.map((prod) => (
          <div className="cart-products" key={prod.id}>
            <img src={prod.image} alt={prod.id} />
            <h4 className="text-center">{prod.title}</h4>
            <div className="sum-rest">
              <p className="resta" onClick={()=> handleRestaCart(prod)}>-</p>
              <p className="px-4">Qty: {prod.cantidad}</p>
              <p className="suma" onClick={()=> handleSumaCart(prod)}>+</p>
            </div>
            
            <p>Price: ${prod.price}</p>
            <p>Sub-total: ${prod.price * prod.cantidad}</p>
            <p>
              <i onClick={() => handleDelete(prod)} class="bi bi-trash"></i>
            </p>
          </div>
        ))}
        {carrito.length > 0 ? (
          <div className="cart-2">
            <h3 className="pt-5 text-center">TOTAL: ${totalPrice()}</h3>
            <button onClick={handleVaciar}>Empty cart</button>

            <Link to={"/checkout"}>
              <button>Checkout</button>
            </Link>
          </div>
        ) : (
          <h5 className="ps-5">The Cart is empty...</h5>
        )}
      </div>
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

export default Cart;
