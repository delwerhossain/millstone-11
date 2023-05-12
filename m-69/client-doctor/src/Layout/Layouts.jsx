import React, { createContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/common/Navbar/Menu";
import Footer from "../pages/common/Navbar/Footer";

let menuList = [
  { title: "Home", link: "/", id: 1 },
  { title: "Contact", link: "/contact", id: 2 },
  { title: "About", link: "/about", id: 3 },
  { title: "Courses", link: "/courses", id: 4 },
  { title: "Blogs", link: "/blogs", id: 5 },
];
export const NavContext = createContext({
  menuList: [],
});

const Layouts = () => {
  return (
    <div className="">
      <NavContext.Provider value={{ menuList }}>
        <Navbar></Navbar>
      </NavContext.Provider>
      {/* outlet part  */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
