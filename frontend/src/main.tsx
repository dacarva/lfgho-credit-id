import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import PolygonId from "./views/PolygonId";
import TokenSender from "./components/TokenSender";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/polygon-verifier",
        element: <PolygonId />,
      },
      {
        path: "/token-sender",
        element: <TokenSender />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
