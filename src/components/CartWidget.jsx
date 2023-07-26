import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const {cartQuantity, carrito} = useContext(CartContext);


  return (
    <div>
        <i className="cart bi bi-cart4">
            {carrito.length > 0 ? <span className='cart-number'>{cartQuantity()}
            </span> : <span></span>}
        </i>
    </div>
  )
}

export default CartWidget