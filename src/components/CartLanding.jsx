import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import CartItem from './Cart';
import Checkout from './Checkout';
import './css/cart-page.scss';

const CartPage = () => {
  const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
  const funcs = { increase, decrease, removeProduct }
  return (
      <>
        <h1>Cart</h1>
        {
          cartItems.length === 0 ? <div className='empty-cart'>Your Cart is empty</div>
          :
          <>
            <div className='cart-page'>
              <div className='cart-item-container'>
                {
                  cartItems.map(item  => <CartItem { ...item } key={item.id} { ...funcs }/>)
                }
              </div>
              <Checkout itemCount={itemCount} total={total} clearCart={clearCart} />
            </div>
          </>
        }
      </>
  );
}

export default CartPage;
