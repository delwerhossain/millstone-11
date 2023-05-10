import React from 'react';
import { useLoaderData } from 'react-router-dom';

const List = () => {
    const listData = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl font-semibold mb-8 '>List Page</h1>
            <ol className='w-11/12 mx-auto'>
                {listData.map((item) => <li className='mb-6 border px-4 py-4 rounded' key={item._id}>{item.name} : {item.email} : {item._id}<button className='ml-3 btn'>X</button></li>)}
                <li></li>
            </ol>
        </div>
    );
};

export default List;