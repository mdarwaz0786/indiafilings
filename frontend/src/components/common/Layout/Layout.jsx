/* eslint-disable react/prop-types */
import { Suspense } from "react";
import Header from "../Header/Header.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Links from "../Links/Links.jsx";
import Footer from "../Footer/Footer.jsx";
import Loader from "../Loader/Loader.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
      <Links />
      <Footer />
    </>
  );
};

export default Layout;