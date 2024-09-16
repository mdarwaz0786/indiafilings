import { lazy } from "react";
import Layout from "../../components/common/Layout/Layout.jsx";
const Incometax = lazy(() => import("../../components/main/Incometax/Incometax.jsx"));

const IncometaxPage = () => {
  return (
    <>
      <Layout>
        <Incometax />
      </Layout>
    </>
  );
};

export default IncometaxPage;