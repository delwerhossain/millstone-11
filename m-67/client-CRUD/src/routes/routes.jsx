import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Courses from "../pages/Courses/Courses";
import Blogs from "../pages/Blogs/Blogs";
import List from "../pages/List/List";
import Update from "../pages/Update/Update";

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
          path: "/list",
          element: <List />,
          loader: () => fetch('http://localhost:5000/users')
        },
        {
          path: "/update/:id",
          element: <Update />,
          loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
      ],
    },
  ]);