import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Shop from "../components/Shop/Shop";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Cart from "../components/Cart/Cart";
import Order from "../components/Order/Order";
import Inventory from "../components/Inventory/Inventory";
import cartProductLoader from "../loader/cartProductLoader";
import Checkout from "../components/Checkout/Checkout";
import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";
import PrivateRoute from "../route/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Shop />,
        loader: () => fetch("http://localhost:3000/totalProducts"),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order",
        element: <Order />,
        loader: cartProductLoader,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
