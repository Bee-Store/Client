import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/product/productSlice';
import Navbar from '../navbar/navbar';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../features/cart/cartSlice'; // import new actions
import "./Items.css";
import { useNavigate } from 'react-router';

const Items = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cart);
  const loading = useSelector(state => state.loading); // Add this line
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Add this useEffect hook
  useEffect(() => {
    console.log(cartState);
  }, [cartState]);

  return (
    <>
      <Navbar/>
      <div className='popular-collection'>
        <div className='container'>
          <div className="popular-collection-items">
            {loading ? (
              <div>Loading...</div>
            ) : (
              products.map((product, index) => {
                const item = cartState && cartState.find(item => item.product._id === product._id);
                return (
                  <div class="item" key={index}> {/* Add unique key prop here */}
                    <img src={`http://localhost:5000/${product.image}`} alt="Raw honey" />
                    <span className='prod-desc'>
                      <h2>{product.name}</h2>
                      <p class="price">${product.price}</p>
                    </span>
                    <p class="rating"></p>
                    <span className='buy-add'>
                      {item ? (
                        <div className="quantity">
                          <button onClick={() => dispatch(decreaseQuantity({product: product._id, quantity: 1}))}>-</button>
                          <p>{isNaN(item.quantity) ? 0 : item.quantity}</p>
                          <button onClick={() => dispatch(increaseQuantity({product: product._id, quantity: 1}))}>+</button>
                        </div>
                      ) : (
                        <p class="description" onClick={() => dispatch(addToCart({product: product, quantity: 1}))}>
                          Add to cart
                        </p>
                      )}
                      <p onClick={() => {
                            if (!item) {
                              dispatch(addToCart({product: product, quantity: 1}));
                            }
                            navigate('/cart');
                          }}>Buy now</p>
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Items;
