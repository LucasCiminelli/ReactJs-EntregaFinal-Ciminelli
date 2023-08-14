import React from "react";

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <div className="item-count-container">
      <div className="item-count">
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <div className="agregar-carrito">
        <button onClick={handleAgregar}>
          Add to the Cart <i className="bi bi-cart-check"></i>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
