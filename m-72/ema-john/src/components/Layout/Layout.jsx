import React from 'react';
import Header from '../Header/Header';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            
            <Outlet />
        </div>
    );
};

export default Layout;