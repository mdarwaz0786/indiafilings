import HomePage from "../pages/HomePage/HomePage.jsx";
import StartupPage from "../pages/StartupPage/StartupPage.jsx";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage.jsx";
import Trademark from "../pages/TrademarkPage/TrademarkPage.jsx";
import GstPage from "../pages/GstPage/GstPage.jsx";
import IncometaxPage from "../pages/IncometaxPage/IncometaxPage.jsx";
import CompliancePage from "../pages/CompliancePage/CompliancePage.jsx";
import BookKeepingPage from "../pages/BookKeepingPage/BookKeepingPage.jsx";
import ConsultationPage from "../pages/CompliancePage/CompliancePage.jsx";
import GuidePage from "../pages/GuidePage/GuidePage.jsx";
import AboutusPage from "../pages/AboutusPage/AboutusPage.jsx";
import LedgerPage from "../pages/LedgerPage/LedgerPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import SignupPage from "../pages/SignupPage/SignupPage.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/startup", element: <StartupPage /> },
  { path: "/registrations", element: <RegistrationPage /> },
  { path: "/trademark", element: <Trademark /> },
  { path: "/gst", element: <GstPage /> },
  { path: "/income-tax", element: <IncometaxPage /> },
  { path: "/compliance", element: <CompliancePage /> },
  { path: "/book-keeping", element: <BookKeepingPage /> },
  { path: "/consultation", element: <ConsultationPage /> },
  { path: "/guides", element: <GuidePage /> },
  { path: "/about-us", element: <AboutusPage /> },
  { path: "/ledgers", element: <LedgerPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "*", element: <NotFound /> },
];

export default routesConfig;
