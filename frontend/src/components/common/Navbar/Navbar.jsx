import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom_navbar">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <Link className={`nav-link ${location.pathname === "/startup" ? "active" : ""}`} to="/startup" role="button">Startup</Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/registrations">Section A</Link>
                <Link className="dropdown-item" to="/registrations">Section B</Link>
                <Link className="dropdown-item" to="/registrations">Section C</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className={`nav-link ${location.pathname === "/registrations" ? "active" : ""}`} to="/registrations" role="button">Registration</Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/registrations">Section A</Link>
                <Link className="dropdown-item" to="/registrations">Section B</Link>
                <Link className="dropdown-item" to="/registrations">Section C</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className={`nav-link ${location.pathname === "/trademark" ? "active" : ""}`} to="/trademark" role="button">Trademark</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className={`nav-link ${location.pathname === "/gst" ? "active" : ""}`} to="/gst" role="button">Goods & Service Tax</Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/gst">Section A</Link>
                <Link className="dropdown-item" to="/gst">Section B</Link>
                <Link className="dropdown-item" to="/gst">Section C</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className={`nav-link ${location.pathname === "/income-tax" ? "active" : ""}`} to="/income-tax" role="button">Income Tax</Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/income-tax">Section A</Link>
                <Link className="dropdown-item" to="/income-tax">Section B</Link>
                <Link className="dropdown-item" to="/income-tax">Section C</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className={`nav-link ${location.pathname === "/compliance" ? "active" : ""}`} to="/compliance" role="button">Compliance</Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/registrations">Section A</Link>
                <Link className="dropdown-item" to="/registrations">Section B</Link>
                <Link className="dropdown-item" to="/registrations">Section C</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className={`nav-link ${location.pathname === "/book-keeping" ? "active" : ""}`} to="/book-keeping" role="button">Book Keepping</Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/registrations">Section A</Link>
                <Link className="dropdown-item" to="/registrations">Section B</Link>
                <Link className="dropdown-item" to="/registrations">Section C</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className={`nav-link ${location.pathname === "/consultation" ? "active" : ""}`} to="/consultation" role="button">Consultation</Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/registrations">Section A</Link>
                <Link className="dropdown-item" to="/registrations">Section B</Link>
                <Link className="dropdown-item" to="/registrations">Section C</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
