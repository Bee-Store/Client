import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { addProductAsync } from "../../features/product/productSlice";
import "./admin.css";

const AddProductModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles) => {
    setNewProduct({ ...newProduct, image: acceptedFiles[0] });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleInputChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProductAsync(newProduct));
    setNewProduct({ name: "", price: "", image: "" });
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="admin-add-prod">
        Add Product
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="product-add-form">
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="border-2 focus:border-yellow-300"
                required
              />

              <label>Price:</label>
              <input
                type="number"
                name="price"
                className="border-2 focus:border-yellow-300"
                value={newProduct.price}
                onChange={handleInputChange}
                required
              />

              <label>Image: </label>
              <div
                {...getRootProps()}
                className="image-upload-box px-4 rounded-md font-bold"
              >
                <input name="image" {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </div>
              <span className="close-modal" onClick={() => setShowModal(false)}>
                ×
              </span>
              <button
                type="submit"
                className="bg-yellow-500 py-1 px-2 text-white mb-4"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProductModal;
