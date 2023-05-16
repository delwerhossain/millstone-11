import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  // state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setError("");
        setSuccess("successfully signed out");
      })
      .catch((error) => {
        console.error(error);
        setError(error.code);
        setSuccess("");
      });
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="flex gap-4">
        <Link to="/">Shop</Link>
        <Link to="/order">Orders</Link>
        <Link to="/inventory">Inventory</Link>

        {user ? (
         <Link onClick={handleSignOut}>Sign out</Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign in</Link>
          </>
        )}
        {user && 
            <img  src={`${user.photoURL}`} className="w-8 h-8 rounded-full"/>}
      </div>
    </nav>
  );
};

export default Header;
