import React, { useState } from "react";

import "./admin.css";

const AddProductModal = () => {
  const [showModal, setShowModal] = useState(false);

  const [fileName, setFileName] = useState();
  const [filePrice, setFilePrice] = useState();
  const [fileUpload, setFileUpload] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    // Append the image file under the 'image' field
    formData.append("image", fileUpload);

    // Append the other product data
    formData.append("name", fileName);
    formData.append("price", filePrice);

    fetch("http://127.0.0.1:5000/api/products", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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
                onChange={(e) => setFileName(e.target.value)}
                className="border-2 focus:border-yellow-300"
                required
              />

              <label>Price:</label>
              <input
                type="number"
                name="price"
                className="border-2 focus:border-yellow-300"
                onChange={(e) => setFilePrice(e.target.value)}
                required
              />

              <label>Image: </label>
              <input
                type="file"
                placeholder="Upload a file here..."
                onChange={(e) => setFileUpload(e.target.files[0])}
              />
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
