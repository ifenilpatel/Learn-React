import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import User from "./components/demo1/User.jsx";
import Event from "./components/demo2/Event.jsx";
import Lifecycle from "./components/demo3/Lifecycle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "components",
    element: <User />,
  },
  {
    path: "event",
    element: <Event />,
  },
  {
    path: "lifecycle",
    element: <Lifecycle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
