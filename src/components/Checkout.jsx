import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Spinner } from "./Spinner";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { carrito, totalPrice, emptyCart } = useContext(CartContext);

  const [purchaseId, setPurchaseId] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");

  const { register, handleSubmit } = useForm();

  const buy = async (clientData) => {
    const purchaseInfo = {
      client: clientData,
      products: carrito,
      total: totalPrice(),
    };

    try {
      const purchaseRef = await addDoc(
        collection(db, "purchaseOrders"),
        purchaseInfo
      );

      console.log(purchaseRef.id);

      setPurchaseId(purchaseRef.id);

      setBuyerName(clientData.name);
      setBuyerEmail(clientData.email);
      emptyCart();
    } catch (error) {
      console.log("Error al guardar la compra:", error);
    }
  };

  if (purchaseId) {
    return !purchaseId ? (
      <Spinner />
    ) : (
      <>
        <div className="checkout-message">
          <h2>Hi! {buyerName}, your purchase has been successful. <br/>
          Thanks for buying at Gentlement's Club.</h2>
          <h6>Your order id is: {purchaseId}</h6>
          <p>
            You will be receiving instructions in your mailbox at{" "}
            <span>{buyerEmail}</span>. If you are not seeing the email, please
            check your spam box.
          </p>
          <p>Have a nice day.</p>

          <h5>Gentlement's club sales team.</h5>
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
  }

  return (
    <>
      <div>
        <h2 className="pt-5 ps-5">Checkout</h2>
        <div className="summary">
          <h5 className="text-center mt-5 pb-3">Summary</h5>
          {carrito.map((prod) => (
            <div className="cart-products-checkout" key={prod.id}>
              <img src={prod.image} alt={prod.id} />
              <h6>{prod.title}</h6>
              <p>Qty: {prod.cantidad}</p>
              <p>Price: ${prod.price}</p>
              <p>Sub-total: ${prod.price * prod.cantidad}</p>
            </div>
          ))}
          <div className="summary-end">
            <p className="text-center pt-3">TOTAL: ${totalPrice()}</p>
            <button className="text-center">
              <Link to="/cart" element="{Cart}">
                Go back to the cart 
              </Link>
            </button>
          </div>
        </div>

        <div className="checkout-info mt-5">
          <form onSubmit={handleSubmit(buy)}>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              required
            />
            <input
              type="text"
              placeholder="Surname"
              {...register("surname")}
              required
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              required
            />
            <input
              type="email"
              placeholder="Email ones more"
              {...register("email")}
              required
            />
            <input
              type="text"
              placeholder="Adress"
              {...register("adress")}
              required
            />
            <input
              type="phone"
              placeholder="Phone number"
              {...register("phone")}
              required
            />
            <select className="payment" name="Payment options">
              {
                <option value="value1" selected disabled>
                  Payment options
                </option>
              }
              <option value="value1">Credit Card</option>
              <option value="value2">Cash</option>
              <option value="value3">Digital wallet</option>
            </select>
            <input
              type="text"
              placeholder="Enter your credit card number"
              required
            />
            <input
              type="password"
              placeholder="Enter your 3 digit Security code"
              required
            />
            <button>Purchase</button>
          </form>
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

export default Checkout;
