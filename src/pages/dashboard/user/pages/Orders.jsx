import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Orders() {
  const [products, setProducts] = useState([]);
  const userState = useSelector((state) => state.user);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}orders/customer`, {
      headers: {
        Authorization: `Bearer ${userState.access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  products && console.log(products);
  return (
    <div className="flex flex-col gap-[4em] items-start justify-center mt-[3em]">
      {products &&
        products.map((product, index) => {
          console.log(product.product);
          return (
            <div key={index} className="flex justify-center items-center gap-[15px]">
              <img src={product.product.image} alt="" className="w-[200px] rounded-md"/>
              <span>{product.product.name}</span>
              <span>Ksh {product.product.price}</span>
            </div>
          );
        })}
    </div>
  );
}
// http://localhost:5000/api/orders/customer
