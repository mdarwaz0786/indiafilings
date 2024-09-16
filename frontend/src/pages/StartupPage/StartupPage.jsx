import { lazy } from "react";
import Layout from "../../components/common/Layout/Layout.jsx";
const Startup = lazy(() => import("../../components/main/Startup/Startup.jsx"));

const StartupPage = () => {
  return (
    <>
      <Layout>
        <Startup />
      </Layout>
    </>
  );
};

export default StartupPage;