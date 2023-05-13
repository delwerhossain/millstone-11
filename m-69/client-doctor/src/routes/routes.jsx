import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/AuthenticationPage/Login";
import Register from "../pages/AuthenticationPage/Register";

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
          path: "courses",
          element: <Courses />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
      ],
    },
  ]);