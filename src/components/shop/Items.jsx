import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/product/productSlice';
import Navbar from '../navbar/navbar';
import "./Items.css";
const Items = () => {
  const [added, setAdded] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

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
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
<>
<Navbar/>
    <div className='popular-collection'>
    <div className='container'>
     <div className="popular-collection-items">
      

      {products.map(products => (
          
          <div class="item">
          <img src={products.image} alt="Raw honey" />
         
          <span className='prod-desc'> <h2>{products.name}</h2>
          <p class="price">${products.price}</p>           
          </span>
         
          <p class="rating">
        
          </p>
          <span className='buy-add'>
            {added ? ( <div className="quantity">
            <button onClick={decreaseQuantityHandler}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQuantityHandler} >+</button>
          </div>) : (<p class="description" onClick={addToCartHandler}>
            Add to cart
          </p>)}
       
          <p>
            Buy now
          </p>
          </span>
        </div>
        
          
      ))}
      </div>
      </div>
      </div>
      </>
  )
}

export default Items