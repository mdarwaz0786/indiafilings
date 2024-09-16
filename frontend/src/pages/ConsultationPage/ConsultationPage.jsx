import { lazy } from "react";
import Layout from "../../components/common/Layout/Layout.jsx";
const Consultation = lazy(() => import("../../components/main/Consultation/Consultation.jsx"));

const ConsultationPage = () => {
  return (
    <>
      <Layout>
        <Consultation />
      </Layout>
    </>
  );
};


export default ConsultationPage;