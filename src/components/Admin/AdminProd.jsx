import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/product/productSlice';
import Navbar from '../navbar/navbar';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../features/cart/cartSlice'; // import new actions
import AddProductModal from './AddProductModal';
import './admin.css'

const AdminProducts = () => {
    const [showModal, setShowModal] = useState(false);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cart);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEditClick = (product) => {
    setIsEditing(true);
    setEditedProduct(product);
  };

  const handleSaveClick = () => {
    // Dispatch an action to save the edited product
    // dispatch(updateProductAsync(editedProduct));
    setIsEditing(false);
    setEditedProduct({});
  };

  return (
    <>
      <Navbar/>
     
      <div className='popular-collection'>
      
        <div className='container'>
        <AddProductModal />
          <div className="popular-collection-items">
            {products.map((product, index) => {
              const item = cartState.items.find(item => item.product._id === product._id);
              return (
                <div class="item" key={index}> {/* Add unique key prop here */}
                  {isEditing && product._id === editedProduct._id ? (
                    <>
                      <input type="text"value={editedProduct.image} onChange={(e) => setEditedProduct({...editedProduct, image: e.target.value})} placeholder='image url'/>
                      <span className='prod-desc'> 
                        <input type="text" value={editedProduct.name} onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})} placeholder='product name' />
                        <input type="text" value={editedProduct.price} onChange={(e) => setEditedProduct({...editedProduct, price: e.target.value})} placeholder='price'/>          
                      </span>
                    </>
                  ) : (
                    <>
                      <img src={product.image} alt="Raw honey" />
                      <span className='prod-desc'> 
                        <h2>{product.name}</h2>
                        <p class="price">${product.price}</p>           
                      </span>
                    </>
                  )}
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
                      isEditing && product._id === editedProduct._id ? (
                        <p class="description" onClick={handleSaveClick}>
                          Save
                        </p>
                      ) : (
                        <p class="description" onClick={() => handleEditClick(product)}>
                          Edit
                        </p>
                      )
                    )}
                    <p>Delete</p>
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

export default AdminProducts;
