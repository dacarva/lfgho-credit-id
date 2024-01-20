import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DskGhostID01Home1 from "./pages/Home";
import DskGhostID01Home from "./pages/Delegator";
import ApprovalStatusSucceed from "./pages/ApprovalStatusSucceed";
import ContractSignView from "./pages/ContractSignView";
import Form from "./pages/Form";
import Form1 from "./pages/Form1";
import BeneficiaryView from "./pages/BeneficiaryView";
import ApprovalStatusFail from "./pages/ApprovalStatusFail";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/delegatorview":
        title = "";
        metaDescription = "";
        break;
      case "/approvalstatussucceed":
        title = "";
        metaDescription = "";
        break;
      case "/contractsignview":
        title = "";
        metaDescription = "";
        break;
      case "/form3":
        title = "";
        metaDescription = "";
        break;
      case "/form2":
        title = "";
        metaDescription = "";
        break;
      case "/beneficiaryview":
        title = "";
        metaDescription = "";
        break;
      case "/approvalstatusfail":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DskGhostID01Home1 />} />
      <Route path="/delegatorview" element={<DskGhostID01Home />} />
      <Route
        path="/approvalstatussucceed"
        element={<ApprovalStatusSucceed />}
      />
      <Route path="/contractsignview" element={<ContractSignView />} />
      <Route path="/form3" element={<Form />} />
      <Route path="/form2" element={<Form1 />} />
      <Route path="/beneficiaryview" element={<BeneficiaryView />} />
      <Route path="/approvalstatusfail" element={<ApprovalStatusFail />} />
    </Routes>
  );
}
export default App;
