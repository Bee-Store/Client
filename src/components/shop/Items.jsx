import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/product/productSlice';
import "./Items.css";
const Items = () => {
  const products = useSelector(state => state.products);
  console.log(products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (

    <section className='popular-collection'>
    <div className='container'>
     <div className="popular-collection-items">
      

      {products.map(products => (
          
          <div class="item">
          <img src={products.image} alt="" />
          <h2>{products.name}</h2>
          <p class="price">${products.price}</p>
          <p class="rating">
            <span>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </span>
            <span>{products.price}</span>
          </p>
          <p class="description">
            Worldwide shipping available! Buyer's protection possible!
          </p>
        </div>
        
          
      ))}
      </div>
      </div>
      </section>
  
  )
}

export default Items