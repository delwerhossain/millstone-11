import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
  const res = await fetch("http://localhost:3000/products");
  const products = await res.json();
  const getCarts = getShoppingCart();
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
