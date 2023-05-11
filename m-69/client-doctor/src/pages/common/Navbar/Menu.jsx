import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { NavContext } from '../../../Layout/Layouts';

const Navbar = () => {
    const {menuList} = useContext(NavContext)
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {menuList.map((menu) => (
                    <li key={menu.id}>
                      <NavLink 
                        className={({ isActive }) =>isActive ? "active mr-5 mb-2" : "mr-5 mb-2"
                        }
                        to={menu.link}
                      >
                        {menu.title}
                      </NavLink>
                    </li>
                  ))}
    
                  {/* <li tabIndex={0}>
                    <Link to={"order"}>Order</Link>
                  </li>
                  <li>
                    <Link to={"review"}>Review</Link>
                  </li> */}
                </ul>
              </div>
              <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {menuList.map((menu) => (
                  <li key={menu.id}>
                    <NavLink  className={({ isActive }) =>isActive ? "active mr-3 btn  border-0" : "mr-3 btn text-black border-0 bg-white  hover:text-white"
                        } to={menu.link}>{menu.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end">
              <Link className="btn">Get started</Link>
            </div>
          </div>
    );
};

export default Navbar;