import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext();

const inicialCart = JSON.parse(localStorage.getItem("carrito")) || [];


export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(inicialCart);

  const handleAgregar = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const newCart = [...carrito];

    const productoEncontrado = newCart.find(
      (product) => product.id === itemAgregado.id
    );

    if (productoEncontrado) {
      productoEncontrado.cantidad += cantidad;

        toast.success(`${cantidad} ${item.title} added to the cart`, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      newCart.push(itemAgregado);
      toast.success(`${cantidad} ${item.title} added to the cart`, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setCarrito(newCart);
    console.log(itemAgregado);
    console.log(newCart);
  };

  const cartQuantity = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const deleteItem = id =>{
    const newProducts = carrito.filter((prod) => prod.id !== id)
    setCarrito(newProducts);
  }

  const totalPrice = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  };

  const emptyCart = () => {
    setCarrito([]);
  };

  const handleSumaCart = (prod) => {
    const updatedCarrito = carrito.map((item) =>
      item.id === prod.id && prod.cantidad < prod.stock  ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCarrito(updatedCarrito);
  };

  const handleRestaCart = (prod) => {
    const updatedCarrito = carrito.map((item) =>
      item.id === prod.id && prod.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
    );
    setCarrito(updatedCarrito);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))

  }, [carrito])
  

  

  return (
    <CartContext.Provider
      value={{ carrito, handleAgregar, cartQuantity, totalPrice, emptyCart, deleteItem, setCarrito, handleSumaCart, handleRestaCart }}
    >
        <ToastContainer />
      {children}
    </CartContext.Provider>
  );
};
