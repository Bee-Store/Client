import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalAmount,addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../features/cart/cartSlice';
import './sidebar.css';
import { useNavigate } from 'react-router';

function SideBar({ isOpen, toggle })  {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cart);
  const cartItems = cartState|| []; // Get the products from the cart state
  const totalAmount = useSelector(selectTotalAmount);
  
  const handleClick = (event) => {
    event.stopPropagation();
    toggle();
    localStorage.setItem('isOpen', JSON.stringify(!isOpen));
  };

  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'} >
            <h1 className='cart-header'><span><i class='bx bx-left-arrow-alt' onClick={handleClick}></i></span>Your Bag</h1>
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
                            <button onClick={() => dispatch(decreaseQuantity({ product: item.product._id, quantity: 1 }))}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => dispatch(increaseQuantity({ product: item.product._id, quantity: 1 }))}>+</button>

                    </div>
                  </span>
                  <span><i className='bx bx-trash'  onClick={()=>dispatch(removeFromCart(item.product._id))}></i></span>
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
          <button onClick={()=>{ toggle(), navigate('/shop')}} >Continue Shopping</button>
          <button onClick={()=>{navigate('/cart')}}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar