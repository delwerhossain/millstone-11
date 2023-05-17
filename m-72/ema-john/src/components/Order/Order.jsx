import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart.jsx";
import ReviewItems from "../ReviewItems/ReviewItems.jsx";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb.js";

const Order = () => {
  const saveCart = useLoaderData();
  // console.log(cart);
  const [cart, setCart] = useState(saveCart);
  const handleRemove = (id) => {
      const remainingCart = cart.filter((c) => c._id !== id);
      console.log(id, remainingCart);
    setCart(remainingCart);
    removeFromDb(id);
  };
  const handleClear = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="">
      <h2 className=" w-full rounded-lg bg-green-700 p-3 text-5xl text-white">
        this is OrderList{" "}
      </h2>
      <div className="grid grid-cols-4 justify-center">
        <div className="col-span-3 ">
          <div className="my-6 grid items-center justify-center gap-4">
            {/* <h1> length : {cart.length}</h1> */}
            {cart.map((product) => (
              <ReviewItems
                key={product._id}
                product={product}
                handleRemove={handleRemove}
              ></ReviewItems>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <Cart key={cart._id} cart={cart} handleClear={handleClear}>
            <Link to={"/checkout"}>
              <button className="btn bg-orange-500 ">Procced to order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
