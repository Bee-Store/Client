import React, { useState, useEffect } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}orders/all`)
      .then((res) => res.json())
      .then((data) => setOrders(data.data));
  }, []);

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
            <tr key={index} className="flex gap-10">
              <td>{index + 1}</td>
              <td className="flex flex-col">
                {item &&
                  item.products.map((product, index) => {
                    return <span key={index}>{product.product.name}</span>;
                  })}
              </td>
              <td>{item.totalAmount}</td>
              <td>{item.customerId.username}</td>
              <td>{item.status}</td>
            </tr>
          );
        })}
    </div>
  );
}
