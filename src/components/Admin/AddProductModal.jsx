import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../../features/product/productSlice';

const AddProductModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProductAsync(newProduct));
    setNewProduct({ name: '', price: '', image: '' });
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className='admin-add-prod'>Add Product</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            
            <form onSubmit={handleSubmit} className='product-add-form'>
              <label>
                Name:  </label>
                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
            
              <label>
                Price:</label>
                <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required />
              
              <label>
                Image URL: </label>
                <input type="url" name="image" value={newProduct.image} onChange={handleInputChange} required />
                <span className="close-modal" onClick={() => setShowModal(false)}>×</span>
              <button type="submit" className='add-new-product'>Add Product</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProductModal;
