import { lazy } from "react";
import Layout from "../../components/common/Layout/Layout.jsx";
const Gst = lazy(() => import("../../components/main/Gst/Gst.jsx"));

const GstPage = () => {
  return (
    <>
      <Layout>
        <Gst />
      </Layout>
    </>
  );
};

export default GstPage;