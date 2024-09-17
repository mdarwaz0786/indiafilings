import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer text-white pt-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <h5 className="footer-heading">IndiaFilings</h5>
              <ul className="list-unstyled">
                <li><Link to="#"><i className="fas fa-angle-right"></i> About IndiaFilings</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> Online Payment</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> Careers</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> Contact Us</Link></li>
              </ul>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <h5 className="footer-heading">Platforms</h5>
              <ul className="list-unstyled">
                <li><Link to="#"><i className="fas fa-angle-right"></i> Business Search</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> Trademark Search</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> Client Portal</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> Filings.AE for UAE</Link></li>
              </ul>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <h5 className="footer-heading">Usage</h5>
              <ul className="list-unstyled">
                <li><Link to="#"><i className="fas fa-angle-right"></i> Terms & Conditions</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> Privacy Policy</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> Refund Policy</Link></li>
              </ul>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <h5 className="footer-heading"></h5>
              <ul className="list-unstyled">
                <li><Link to="#"><i className="fas fa-angle-right"></i> Confidentiality Policy</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> Disclaimer Policy</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> LinkedIn</Link></li>
                <li><Link to="#"><i className="fas fa-angle-right"></i> IndiaFilings Review</Link></li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center mt-4">
              <p className="mb-0" style={{ color: "#999" }}>Copyright © 2024 IndiaFilings Private Limited. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;