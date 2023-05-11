import { createContext } from 'react';
import {  Outlet } from "react-router-dom";
import Navbar from '../pages/common/Navbar/Menu';

let menuList = [
  { title: "Home", link: "/", id: 1 },
  { title: "Add", link: "/add", id: 2 },
  { title: "List", link: "/list", id: 3 },
  { title: "Update", link: "/update", id: 4 },
  // { title: "Blogs", link: "/blogs", id: 5 }
];
export const NavContext = createContext({
  menuList: []
})

const Layouts = () => {
    return (
      <div className="mb-16">
        <NavContext.Provider value={{menuList}}>
          <Navbar ></Navbar>
          </NavContext.Provider>
          {/* outlet part  */}
          <Outlet></Outlet>
        </div>
      );
    };

export default Layouts;