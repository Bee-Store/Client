import { notifications } from "@mantine/notifications";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Orders() {
  const navigate = useNavigate();
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
        if (data === "Token is not valid") {
          notifications.show({
            title: data,
            message: "Token has expired, login to proceed.",
          });
          localStorage.clear();
          navigate("/");
          window.location.reload();
        }
        setProducts(data);
      });
  }, []);

  console.log(products);

  return (
    <div className="flex flex-col gap-[4em] items-start justify-center mt-[3em]">
      {products &&
        products.map((product, productIndex) => {
          const nestedProduct = product.products;

          return nestedProduct.map((item, index) => {
            console.log(product.status)
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-[4px]"
              >
                <img
                  src={item.product.image}
                  alt=""
                  className="w-[120px] rounded-md"
                />
                <span>{item.quantity} units</span>
                <span>Product: {item.product.name}</span>
                <span>Amount: Ksh {item.product.price}</span>{" "}
                <span>Status: {product.status}</span>{" "}
              </div>
            );
          });
        })}
    </div>
  );
}
