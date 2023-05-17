import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./provider/AuthProvider";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
