import { lazy } from "react";
import Layout from "../../components/common/Layout/Layout.jsx";
const Registration = lazy(() => import("../../components/main/Registration/Registration.jsx"));

const RegistrationPage = () => {
  return (
    <>
      <Layout>
        <Registration />
      </Layout>
    </>
  );
};

export default RegistrationPage;