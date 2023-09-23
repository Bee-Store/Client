import React, { useState } from 'react'
import './sidebar.css';
function SideBar({ isOpen, toggle, setIsOpen })  {
  const [added, setAdded] = useState(false)
  const [quantity, setQuantity] = useState(1)
  function handleOpen(){
    setIsOpen(false)

  }
  function addToCartHandler(){
    setAdded(true)
  }

  function increaseQuantityHandler(){
    setQuantity(quantity + 1)
  }

  function decreaseQuantityHandler(){
    if (quantity > 1){
      setQuantity(quantity - 1)
    } else if(quantity === 1){
      setAdded(false)
    }
  }
  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'} onClick={toggle}>
    <h1 onClick={handleOpen} className='cart-header'><span><i class='bx bx-left-arrow-alt'></i></span>Your Bag</h1>
    <hr style={{marginBottom:'2rem'}}/>
    <div className="cart-container">
      <div className='cart-holder'>
    
      <div className="cart">
        <img src="https://images.unsplash.com/photo-1605880980331-20a711b27338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvbmV5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="cart-item-details">
          <p>Name</p>
          <div className="price-quantity">
            <p>QTY:{quantity}</p>
            <p>KSH 1,100</p>
          </div>
          <div className="cart-buttons">
          <span className='buy-add'>
             <div className="quantity">
            <button onClick={decreaseQuantityHandler}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQuantityHandler} >+</button>
          </div>
          </span>
          <span><i className='bx bx-trash'  ></i></span>
          
          </div>
        </div>
        
      </div>
      <hr />
      <div className="cart">
        <img src="https://images.unsplash.com/photo-1605880980331-20a711b27338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvbmV5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="cart-item-details">
          <p>Name</p>
          <div className="price-quantity">
            <p>QTY:{quantity}</p>
            <p>KSH 1,100</p>
          </div>
          <div className="cart-buttons">
          <span className='buy-add'>
             <div className="quantity">
            <button onClick={decreaseQuantityHandler}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQuantityHandler} >+</button>
          </div>
          </span>
          <span><i className='bx bx-trash'  ></i></span>
          
          </div>
        </div>
        
      </div>
      </div>
      <div className="cart-summary">
        <div className='cart-total'>
            <p>Total</p>
            <p>KSH <span>2,000</span></p>
        </div>
        <button>Continue Shopping</button>
        <button>Proceed to Checkout</button>
        
      </div>
    </div>
</div>
  )
}

export default SideBar