import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // use state
  const { user, loader } = useContext(AuthContext);
  // location
  const location = useLocation();
    // console.log(location);
    // loader 
  if (loader) {
    return (
      <div className=" my-8 flex items-center justify-center">
        <div>
          <h1 className="mt-3 text-center text-2xl">loading...</h1>{" "}
          <progress className=" progress w-56"></progress>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{from : location}} replace></Navigate>;
};

export default PrivateRoute;
