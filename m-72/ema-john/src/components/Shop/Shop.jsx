import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  

  // loader
  const { totalProducts } = useLoaderData();

  // pagination counter
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const paginationArrays = [...Array(totalPages).keys()];
  console.log(paginationArrays);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // cart.push(product); '
    let newCart = [];
    // const newCart = [...cart, product];
    // if product doesn't exist in the cart, then set quantity = 1
    // if exist update quantity by 1
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  const handleClear = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart handleClear={handleClear} cart={cart} key={cart._id}>
            <Link to={"/order"}>
              <button className="btn bg-orange-500 ">Review</button>
            </Link>
          </Cart>
        </div>
      </div>
      {/* pagination */}

      <div className="my-4">
        <h3>current page : {pageNumber}</h3>
        <div className="flex gap-3">
          {paginationArrays.map((page) => (
            <div className="">
              <button
                onClick={() => setPageNumber(page)}
                className="btn text-4xl text-red-600"
              >
                {page}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
