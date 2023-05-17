import { useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
  const getCarts = getShoppingCart();
  const ids = Object.keys(getCarts);
  const [products, setProducts] = useState([]);
  console.log(ids);

  const res = await fetch("http://localhost:3000/productsById", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ids),
  })
  .then(res => res.json()) 
    .then(data => {
      setProducts(data);
    })

  const savedCart = [];
  for (const id in getCarts) {
    const addedProduct = products.find((pd) => pd._id === id);
    if (addedProduct) {
      const quantity = getCarts[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  return savedCart;
};

export default cartProductLoader;
