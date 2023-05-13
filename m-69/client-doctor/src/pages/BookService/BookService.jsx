import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookService = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    return (
        <div>
            
            <h1 className='p-4 text-white bg-blue-500 rounded-lg'>BookService</h1>
            <p className='text-4xl text-red-600'>id-- {_id}</p>
        </div>
    );
};

export default BookService;