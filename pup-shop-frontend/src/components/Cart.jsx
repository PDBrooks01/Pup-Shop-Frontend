import "./css/cart.scss"
import React from 'react'


const CartItem = (props)=>{
  const { name , img , unit_price, quantity, id, increase, decrease} = props
  const product = {name, img, unit_price, quantity, id}
  return(
    <div className="cart-item">
      <div className='item-image'>
        <img src={img} alt={name} />
      </div>
      <div className='name-price'>
        <h4>{name}</h4>
        <p>${unit_price}</p>
      </div>
      <div className='quantity'>
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className='btns-container'>
        <button
        className='btn-increase' onClick={() => increase(product)}>
        +
        </button>
        {
          quantity === 1 &&
          <button
          className='btn-trash'> X
          </button>
        }
        {
          quantity > 1 &&
          <button
          className='btn-decrease' onClick={() => decrease(product)}> -
          </button>
        }
      </div>
    </div>
  )
}
export default CartItem
