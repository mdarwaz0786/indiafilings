import { lazy } from "react";
import Layout from "../../components/common/Layout/Layout.jsx";
const Trademark = lazy(() => import("../../components/main/Trademaek/Trademark.jsx"));

const TrademarkPage = () => {
  return (
    <>
      <Layout>
        <Trademark />
      </Layout>
    </>
  );
};

export default TrademarkPage;