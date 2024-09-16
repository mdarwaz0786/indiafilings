import { lazy } from "react";
import Layout from "../../components/common/Layout/Layout.jsx";
const Compliance = lazy(() => import("../../components/main/Compliance/Compliance.jsx"));

const CompliancePage = () => {
  return (
    <>
      <Layout>
        <Compliance />
      </Layout>
    </>
  );
};

export default CompliancePage;