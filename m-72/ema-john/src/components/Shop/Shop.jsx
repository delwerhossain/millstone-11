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
  const [currentPage, setCurrentPage] = useState(0);
const [itemsPerPage, setItemsPerPage] = useState(10);
  

  // loader
  const { totalProducts } = useLoaderData();

  // pagination counter
  // const itemsPerPage = 10;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const paginationArrays = [...Array(totalPages).keys()];
   const options = [5, 10, 15, 20 ,30 ,50 ,100];
   const handleSelectChange = (event)=> {
     setItemsPerPage(parseInt(event.target.value));
     setCurrentPage(0);
   }

  //products fetch with pagination
   useEffect(() => {
     async function fetchData() {
       const response = await fetch(
         `http://localhost:3000/products?page=${currentPage}&limit=${itemsPerPage}`
       );

       const data = await response.json();
       setProducts(data);
     }
     fetchData();
   }, [currentPage, itemsPerPage]);

  
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
        <div className="mx-auto my-8 grid w-11/12 grid-cols-1  justify-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
              <button className="btn w-36 bg-orange-500 ">Review</button>
            </Link>
          </Cart>
        </div>
      </div>

      {/* pagination */}

      <div className="my-4 grid justify-center">
        <h3 className="my-3  rounded-xl bg-slate-200 px-3 py-1 text-center text-3xl">
          current page : {currentPage} and items per page : {itemsPerPage}
        </h3>
        <div className="flex justify-center gap-3">
          {paginationArrays.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`btn border-none bg-slate-300 text-xl  hover:text-white ${
                page == currentPage ? "bg-primary text-white" : "text-black"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        {/* <div className="dropdown-hover dropdown">
          <label tabIndex={0} className="btn m-1">
            Hover
          </label>
          <select
            value={itemsPerPage}
            onChange={handleSelectChange}
            tabIndex={0}
            className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div> */}
        <select className=" p-3 border bg-slate-200 rounded-xl my-3 font-bold text-center"  value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
