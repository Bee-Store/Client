import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../features/cart/cartSlice';
import './sidebar.css';
import { useNavigate } from 'react-router';

function SideBar({ isOpen, toggle })  {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cart);
  const cartItems = cartState.items
  const totalAmount = useSelector(state => state.cart.totalAmount);

  function handleOpen() {}

  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'} onClick={toggle}>
      <h1 onClick={handleOpen} className='cart-header'><span><i class='bx bx-left-arrow-alt'></i></span>Your Bag</h1>
      <hr style={{marginBottom:'2rem'}}/>
      <div className="cart-container">
        <div className='cart-holder'>
          {cartItems.map((item, index) => (
            <div className="cart" key={index}>
              <img src={item.product.image} alt="" />
              <div className="cart-item-details">
                <p className='prod-name'>{item.product.name}</p>
                <div className="price-quantity">
                  <p>QTY:{item.quantity}</p>
                  <p>{item.product.price * item.quantity}</p>
                </div>
                <div className="cart-buttons">
                  <span className='buy-add'>
                    <div className="quantity">
                      <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                      <p>{item.quantity}</p>
                      <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                    </div>
                  </span>
                  <span><i className='bx bx-trash'  onClick={()=>dispatch(removeFromCart(item))}></i></span>
                </div>
              </div>
              {index !== cartItems.length - 1 && (<hr />)}
              <hr />
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className='cart-total'>
            <p>Total</p>
            <p>KSH <span>{Math.floor(totalAmount)}</span></p>
          </div>
          <button onClick={()=>navigate('/shop')}>Continue Shopping</button>
          <button onClick={()=>navigate('/cart')}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
