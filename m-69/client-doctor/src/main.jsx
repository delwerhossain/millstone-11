import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="lg:w-10/12 md:w-11/12 mx-auto">
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
);
