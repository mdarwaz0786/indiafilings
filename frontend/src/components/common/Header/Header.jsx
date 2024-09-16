import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary custom_header">
        <div className="container custom_header_container">
          <Link className="navbar-brand" to="/"><img className="logo" src="https://img.indiafilings.com/catalog/logo-110x52.png" alt="logo" /></Link>

          <form className="d-flex me-3 header_form_mobile" role="search">
            <input className="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success search-btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex me-3 header_form_none" role="search">
              <input className="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success search-btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item navbar_item">
                <Link className={`nav-link ${location.pathname === "/startup" ? "active" : ""}`} to="/startup" style={{ color: "#484848", fontSize: "14px" }}>Startup</Link>
              </li>

              <li className="nav-item navbar_item">
                <Link className={`nav-link ${location.pathname === "/registrations" ? "active" : ""}`} to="/registrations" style={{ color: "#484848", fontSize: "14px" }}>Registration</Link>
              </li>

              <li className="nav-item navbar_item">
                <Link className={`nav-link ${location.pathname === "/trademark" ? "active" : ""}`} style={{ color: "#484848", fontSize: "14px" }}>Trademark</Link>
              </li>

              <li className="nav-item navbar_item">
                <Link className={`nav-link ${location.pathname === "/gst" ? "active" : ""}`} to="/gst" style={{ color: "#484848", fontSize: "14px" }}>Goods & Service Tax</Link>
              </li>

              <li className="nav-item navbar_item">
                <Link className={`nav-link ${location.pathname === "/income-tax" ? "active" : ""}`} to="/income-tax" style={{ color: "#484848", fontSize: "14px" }}>Income tax</Link>
              </li>

              <li className="nav-item navbar_item">
                <Link className={`nav-link ${location.pathname === "/compliance" ? "active" : ""}`} to="/compliance" style={{ color: "#484848", fontSize: "14px" }}>Compliance</Link>
              </li>

              <li className="nav-item navbar_item">
                <Link className={`nav-link ${location.pathname === "/book-keeping" ? "active" : ""}`} to="/book-keeping" style={{ color: "#484848", fontSize: "14px" }}>Book Keepping</Link>
              </li>

              <li className="nav-item navbar_item">
                <Link className={`nav-link ${location.pathname === "/consultation" ? "active" : ""}`} to="/consultation" style={{ color: "#484848", fontSize: "14px" }}>Consultation</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="tel:9876543210" aria-current="page" style={{ color: "#484848", fontSize: "14px" }}><i className="fa-solid fa-phone"></i> 9876543210</a>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/guides" ? "active" : ""}`} to="/guides" style={{ color: "#484848", fontSize: "14px" }}>Guides</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about-us" ? "active" : ""}`} to="/about-us" style={{ color: "#484848", fontSize: "14px" }}>About Us</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/ledgers" ? "active" : ""}`} to="/ledgers" style={{ color: "#484848", fontSize: "14px" }}>LEDGERS</Link>
              </li>
            </ul>

            <Link to="/login"><button className="btn btn-primary login-btn">Login</button></Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
