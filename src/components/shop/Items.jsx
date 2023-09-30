import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/product/productSlice';
import Navbar from '../navbar/navbar';
import { addToCart } from '../../features/cart/cartSlice'; // import addToCart action
import "./Items.css";

const Items = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  // Initialize with empty arrays
  const [added, setAdded] = useState([]);
  const [quantity, setQuantity] = useState([]);

  function addToCartHandler(index){
    const newAdded = [...added];
    newAdded[index] = true;
    setAdded(newAdded);
    dispatch(addToCart({product: products[index], quantity: quantity[index]})); // dispatch addToCart action
  }

  function increaseQuantityHandler(index){
    const newQuantity = [...quantity];
    newQuantity[index]++;
    setQuantity(newQuantity);
  }

  function decreaseQuantityHandler(index){
    const newQuantity = [...quantity];
    if (newQuantity[index] > 1){
      newQuantity[index]--;
      setQuantity(newQuantity);
    } else if(newQuantity[index] === 1){
      const newAdded = [...added];
      newAdded[index] = false;
      setAdded(newAdded);
    }
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Update quantity and added arrays when products change
  useEffect(() => {
    setQuantity(products.map(() => 1));
    setAdded(products.map(() => false));
  }, [products]);

  return (
    <>
      <Navbar/>
      <div className='popular-collection'>
        <div className='container'>
          <div className="popular-collection-items">
            {products.map((product, index) => (
              <div class="item" key={index}> {/* Add unique key prop here */}
                <img src={product.image} alt="Raw honey" />
                <span className='prod-desc'> 
                  <h2>{product.name}</h2>
                  <p class="price">${product.price}</p>           
                </span>
                <p class="rating"></p>
                <span className='buy-add'>
                  {added[index] ? ( 
                    <div className="quantity">
                      <button onClick={() => decreaseQuantityHandler(index)}>-</button>
                      {/* Ensure quantity is never NaN */}
                      <p>{isNaN(quantity[index]) ? 0 : quantity[index]}</p>
                      <button onClick={() => increaseQuantityHandler(index)}>+</button>
                    </div>
                  ) : (
                    <p class="description" onClick={() => addToCartHandler(index)}>
                      Add to cart
                    </p>
                  )}
                  <p>Buy now</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Items;
