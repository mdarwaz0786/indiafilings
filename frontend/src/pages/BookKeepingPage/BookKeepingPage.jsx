import { lazy } from "react";
import Layout from "../../components/common/Layout/Layout.jsx";
const BookKeeping = lazy(() => import("../../components/main/BookKeeping/BookKeeping.jsx"));

const BookKeepingPage = () => {
  return (
    <>
      <Layout>
        <BookKeeping />
      </Layout>
    </>
  );
};

export default BookKeepingPage;