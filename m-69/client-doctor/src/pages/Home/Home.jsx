import React from 'react';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <h1 className='p-4 text-white bg-indigo-500 rounded-lg'>Home</h1>

            <HomeBanner></HomeBanner>
        </div>
    );
};

export default Home;