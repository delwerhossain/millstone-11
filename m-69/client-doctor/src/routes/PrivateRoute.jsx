import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center ">
        <progress className="progress w-11/12"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
