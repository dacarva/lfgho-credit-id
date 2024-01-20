import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import PolygonId from "./views/PolygonId";
import TokenSender from "./components/TokenSender";
import Home from "./views/Home";
import Delegator from "./views/Delegator";
import AlchemyAA from "./views/AlchemyAA";
import ContractSignView from "./views/ContractSignView";
import BeneficiaryView from "./views/BeneficiaryView";
import ApprovalStatusSucceed from "./views/ApprovalStatusSucceed";
import ApprovalStatusFail from "./views/ApprovalStatusFail";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/delegator",
        element: <Delegator />,
      },
      {
        path: "/contract-sign",
        element: <ContractSignView />,
      },
      {
        path: "/beneficiary",
        element: <BeneficiaryView />,
      },
      {
        path: "/approval-status-succeed",
        element: <ApprovalStatusSucceed />,
      },
      {
        path: "/approval-status-fail",
        element: <ApprovalStatusFail />,
      },
      {
        path: "/beneficiary",
        element: <BeneficiaryView />,
      },

      {
        path: "/alchemy-aa",
        element: <AlchemyAA />,
      },
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
