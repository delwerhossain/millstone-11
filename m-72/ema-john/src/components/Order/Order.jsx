import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart.jsx';
import ReviewItems from '../ReviewItems/ReviewItems.jsx';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb.js';

const Order = () => {
    const saveCart = useLoaderData()
// console.log(cart);
    const [cart, setCart] = useState(saveCart)
    const handleRemove = (id) => {
        const remainingCart = cart.filter(c => c.id !== id)
        setCart(remainingCart)
        removeFromDb(id)
    }
    const handleClear = () => {
        setCart([])
        deleteShoppingCart()
     }
    return (
        <div className=''>
               <h2 className=' text-5xl bg-green-700 text-white p-3 w-full rounded-lg'>this is OrderList </h2>
            <div className='grid grid-cols-4 justify-center' >
                <div className='col-span-3 '>
                    <div className='grid gap-4 justify-center items-center my-6'>
                        {/* <h1> length : {cart.length}</h1> */}
                        {cart.map((product) => <ReviewItems key={product.id} product={product} handleRemove={handleRemove}
                        ></ReviewItems>)}

                    </div>
                </div>
                <div className='col-span-1'>
                    <Cart key={cart.id} cart={cart} handleClear={handleClear}>
                    <Link to={'/checkout'}><button className='btn bg-orange-500 '>Procced to order</button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;