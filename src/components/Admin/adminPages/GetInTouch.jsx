import React, { useState, useEffect } from "react";

export default function GetInTouch() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}orders/all`)
      .then((res) => res.json())
      .then((data) => setOrders(data.data));
  }, []);

  function formatDate(inputDate) {
    const date = new Date(inputDate);

    const day = date.getDate();

    const month = date.toLocaleString("default", {
      month: "short",
    });

    const year = date.getFullYear();
    // Get the last two digits of the year
    const formattedDate = `${day}th ${month}`;
    console.log(formattedDate);
    return formattedDate;
  }
  return (
    <div className="mt-7 ml-12">
      <table className="flex gap-5">
        <thead>
          <tr className="flex gap-10">
            <th>Id</th>
            <th>Products</th>
            <th>Amount</th>
            <th>Customer</th> {/* user info */}
            <th>Status</th>
            <th>Date</th>
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
              <td>{item.user.username}</td>
              <td>{item.status}</td>
              <td>{formatDate(item.orderDate)}</td>
            </tr>
          );
        })}
    </div>
  );
}
