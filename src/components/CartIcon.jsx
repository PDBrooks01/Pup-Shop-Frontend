import React, {useContext}  from "react"
import shoppingBag from './public/shopping-bag.png'
import {CartContext} from '../context/cart-context'
import './css/cart-icon.scss'

const CartIcon = ()=>{
  const {itemCount,cartItems} = useContext(CartContext)
  console.log('CartItems:',cartItems);
  return(
    <div className="cart-container">
    <img src = {shoppingBag} alt = 'Shopping-Cart-Icon' />
    {
      itemCount>0 ? <span className="cart-count"> {itemCount} </span>: null
    }
    </div>
  )
}

export default CartIcon;
