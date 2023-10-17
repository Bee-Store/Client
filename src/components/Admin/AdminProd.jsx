import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/product/productSlice';
import Navbar from '../navbar/navbar';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../features/cart/cartSlice'; // import new actions
import AddProductModal from './AddProductModal';
import { addProductAsync,updateProductAsync,removeProductAsync } from '../../features/product/productSlice';
import './admin.css'

const AdminProducts = () => {
    const [showModal, setShowModal] = useState(false);
  const products = useSelector(state => state.products);
  console.log(products)
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
  function handleDeleteClick(product){
    
    console.log('delete:' ,product._id)
     dispatch(removeProductAsync(product._id))
  }

  return (
    <>
   
      <div className='popular-collection admin-pop-collection'>
      
        <div className='Admin-container'>
          <div className='add-modal'>
        <AddProductModal />
        </div>
          <div className="popular-collection-items">
            {products.map((product, index) => {
              const item = cartState.find(item => item.product._id === product._id);
              return (
                <div class="item" key={index}> {/* Add unique key prop here */}
                  {isEditing && product._id === editedProduct._id ? (
                    <>
                      <input type="text"value={editedProduct.image} onChange={(e) => setEditedProduct({...editedProduct, image: e.target.value})} placeholder='image url'/>
                      <span className='prod-desc'> 
                        <input type="text" value={editedProduct.name} onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})} placeholder='product name' />
                        <input type="text" value={editedProduct.price} onChange={(e) => setEditedProduct({...editedProduct, price: e.target.value})} placeholder='price'/>          
                      </span>
                      <p class="description" onClick={handleSaveClick}>
                                Save
                              </p>
                    </>
                  ) : (
                    <>
                      <img src={`http://localhost:5000/${product.image}`} alt="Raw honey" className='img-admin-upload' 
                      style={{
                          width: '100%', 
                          height: '10rem', 
                        }}/>
                      <span className='prod-desc'> 
                        <h2>{product.name}</h2>
                        <p class="price">${product.price}</p>           
                      </span>
                      <div className="button-group">
      <p class="description" onClick={() => handleEditClick(product)}>
        Edit
      </p>
      <p class="del-btn" onClick={() => handleDeleteClick(product)}>
        Delete
      </p>
    </div>
                    </>
                  )}
              
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
