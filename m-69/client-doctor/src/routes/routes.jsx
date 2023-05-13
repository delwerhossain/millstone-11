import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Checkout from "../pages/Checkout/Checkout";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/AuthenticationPage/Login";
import Register from "../pages/AuthenticationPage/Register";
import BookService from "../pages/BookService/BookService";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "checkout/:id",
          element: <Checkout />,
          loader: ({params})=>{fetch(`http://localhost:5000/checkout/${params.id}`)}
        },
        {
          path: 'book/:id', 
          element: <BookService></BookService>, 
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
      ],
    },
  ]);