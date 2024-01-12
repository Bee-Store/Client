import React, { useState, useEffect } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}orders/all`)
      .then((res) => res.json())
      .then((data) => setOrders(data.data));
  }, []);

  const orderStatus = ["Pending", "Shipped", "Delivered", "Cancelled"];
  const [selectedStatus, setSelectedStatus] = useState();

  // const isDisabled = selectedStatus ? "disabled" : null

  return (
    <div className="mt-7 ml-12">
      <table className="flex gap-5">
        <thead>
          <tr className="flex gap-10">
            <th>Id</th>
            <th>Products</th>
            <th>Amount</th>
            <th>Customer</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
      {orders &&
        orders.map((item, index) => {
          return (
            <tr key={index} className="flex gap-10 my-3">
              <td>{index + 1}</td>
              <td className="flex flex-col">
                {item &&
                  item.products.map((product, index) => {
                    return <span key={index}>{product.product.name}</span>;
                  })}
              </td>
              <td>{item.totalAmount}</td>
              <td>{item.customerId.username}</td>
              <select onChange={(e) => setSelectedStatus(e.target.value)}>
                {orderStatus.map((status, index) => (
                  <option
                    key={index}
                    value={status}
                    selected={status === item.status}
                  >
                    {status}
                  </option>
                ))}
              </select>

              <button
                disable={true}
                className="bg-yellow-500 text-white py-1 px-3 rounded-md cursor-pointer"
                onClick={() => alert("Not disabled")}
              >
                Update
              </button>
            </tr>
          );
        })}
    </div>
  );
}
