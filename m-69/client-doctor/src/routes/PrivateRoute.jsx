import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center ">
        <progress className="progress w-11/12"></progress>
      </div>
    );
  }
  return children;
};

export default PrivateRoute;
