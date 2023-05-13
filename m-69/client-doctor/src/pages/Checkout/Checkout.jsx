import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const loaderData = useLoaderData()
    return (
        <div>
            
            <h1 className='p-4 text-white bg-blue-500 rounded-lg'>Checkout</h1>
            <p className='text-4xl text-red-600'>{loaderData._id }</p>
        </div>
    );
};

export default Checkout;