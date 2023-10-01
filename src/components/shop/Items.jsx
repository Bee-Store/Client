import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/product/productSlice';
import Navbar from '../navbar/navbar';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../features/cart/cartSlice'; // import new actions
import "./Items.css";

const Items = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar/>
      <div className='popular-collection'>
        <div className='container'>
          <div className="popular-collection-items">
            {products.map((product, index) => {
              const item = cartState.items.find(item => item.product._id === product._id);
              return (
                <div class="item" key={index}> {/* Add unique key prop here */}
                  <img src={product.image} alt="Raw honey" />
                  <span className='prod-desc'> 
                    <h2>{product.name}</h2>
                    <p class="price">${product.price}</p>           
                  </span>
                  <p class="rating"></p>
                  <span className='buy-add'>
                    {item ? ( 
                      <div className="quantity">
                        <button onClick={() => dispatch(decreaseQuantity({product}))}>-</button>
                        {/* Ensure quantity is never NaN */}
                        <p>{isNaN(item.quantity) ? 0 : item.quantity}</p>
                        <button onClick={() => dispatch(increaseQuantity({product}))}>+</button>
                      </div>
                    ) : (
                      <p class="description" onClick={() => dispatch(addToCart({product, quantity: 1}))}>
                        Add to cart
                      </p>
                    )}
                    <p>Buy now</p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Items;
