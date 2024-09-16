import { lazy } from "react";
import Layout from "../../components/common/Layout/Layout.jsx";
const Home = lazy(() => import("../../components/main/Home/Home.jsx"));

const HomePage = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;