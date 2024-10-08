import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Incometax = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li><Link to="/"></Link></li>
                  <li><Link to="#">Income Tax</Link></li>
                  <li><Link to="#">Income Tax Services</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="top">
            {/* Left Column */}
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="top_left d-flex flex-column flex-lg-row">
                  <div className="top_img">
                    <img className="img-fluid" src="https://img.indiafilings.com/catalog/accounting-taxes-business.png" alt="img" />
                  </div>

                  <div className="top_main mt-3 mt-lg-0">
                    <h4>Company Registration</h4>
                    <div className="rating">
                      <span className="rating_star">4.8</span>
                      <span className="rating_count">9962 customers</span>
                      <p>Easily register a company and get assistance for bank account opening.</p>
                    </div>

                    <div className="form my-3">
                      <select className="form-select">
                        <option value="">MCA Name Approval</option>
                        <option value="">Open Person Company</option>
                        <option value="">Name & Incorporation</option>
                      </select>
                    </div>

                    <div className="offer d-flex flex-column flex-md-row">
                      <div className="offer_left mb-3 mb-md-0">
                        <span className="inr" style={{ color: "black", fontSize: "0.9rem", fontWeight: "600" }}>
                          INR 6899 <span style={{ color: "rgb(155, 160, 177)", fontSize: "0.9rem" }}>All Inclusive</span>
                        </span>
                        <p className="exclusive">3 Exclusive Offers</p>
                        <p className="heading">One Person Company</p>
                        <ul className="list-unstyled list-item">
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> Instant Incorporation
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> Incorporation Fee
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> Company Incorporation
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> Hyper Token
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> DSC Support & Shipping
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> 1 Year LEDGERS License
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> Bank Account Assistance
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> DSC Certificate Payable
                          </li>
                        </ul>
                      </div>

                      <div className="offer_right offer_left">
                        <span className="inr" style={{ color: "black", fontSize: "0.9rem", fontWeight: "600" }}>
                          INR 6899 <span style={{ color: "rgb(155, 160, 177)", fontSize: "0.9rem" }}>All Inclusive</span>
                        </span>
                        <p className="exclusive">3 Exclusive Offers</p>
                        <p className="heading">One Person Company</p>
                        <ul className="list-unstyled list-item">
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> Instant Incorporation
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> Incorporation Fee
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> Company Incorporation
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> Hyper Token
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> DSC Support & Shipping
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> 1 Year LEDGERS License
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> Bank Account Assistance
                          </li>
                          <li style={{ fontSize: "0.84375rem" }}>
                            <i className="fas fa-check text-primary"></i> DSC Certificate Payable
                          </li>
                        </ul>
                      </div>
                    </div>

                    <hr />

                    <div className="terms_conditions">
                      <Link to="#">Terms and conditions</Link>
                    </div>

                    <hr />

                    <div className="offers_discounts d-flex justify-content-between">
                      <span>Offers and discounts</span>
                      <Link to="#">Refer a friend</Link>
                    </div>

                    <div className="gst_section">
                      <div className="invoicing d-flex mb-3">
                        <img className="img-fluid" src="https://img.indiafilings.com/catalog/ledgers_icon.png" alt="img" />
                        <div>
                          <Link to="#" style={{ textDecoration: "none", fontWeight: "600" }}>LEDGERS Invoicing Platform</Link>
                          <p>Invoicing, GST Filing, Banking and Payroll</p>
                        </div>
                      </div>

                      <hr />

                      <div className="invoicing d-flex mb-3">
                        <img className="img-fluid" src="https://img.indiafilings.com/catalog/gstn-icon.png" alt="img" />
                        <div>
                          <Link to="#" style={{ textDecoration: "none", color: "black", fontWeight: "550" }}>
                            Save 18% with GST Registration
                          </Link>
                          <p>Get GST eInvoice with Input Tax Credit</p>
                        </div>
                      </div>

                      <hr />

                      <div className="invoicing d-flex">
                        <img className="img-fluid" src="https://img.indiafilings.com/catalog/icici-icon.png" alt="img" />
                        <div>
                          <Link to="#" style={{ textDecoration: "none", fontWeight: "600" }}>Current Bank Account</Link>
                          <p>Zero Account Maintenance Charges for 1 Year</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Left Column */}

              {/* Right Column */}
              <div className="col-lg-3 col-md-12 mt-4 mt-lg-0">
                <div className="card">
                  <img src="https://img.indiafilings.com/catalog/personalised-quotes-if.png" className="card-img-top" alt="img" />
                  <div className="card-body">
                    <form className="card_form">
                      <input className="form-control mb-3" type="text" placeholder="Name" />
                      <input className="form-control mb-3" type="email" placeholder="Email" />
                      <input className="form-control mb-3" type="number" placeholder="Phone" />
                      <div className="form-check">
                        <input type="checkbox" id="gstCheckbox" />
                        <label htmlFor="gstCheckbox">Enter GSTIN to get 18% GST Credit</label>
                      </div>
                      <button className="btn btn-primary w-100 mt-3">Get Started</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <iframe style={{ borderRadius: "0.2rem" }} src="https://www.youtube.com/embed/nZxaZdUnagU?autoplay=1&amp;mute=1&amp;loop=1&amp;rel=0&amp;playlist=nZxaZdUnagU" width="540" height="315" title="GST Return Filing by IndiaFilings"></iframe>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="card custom_card">
                <img src="https://img.indiafilings.com/catalog/company-registration-india.png" className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"><span style={{ fontWeight: "600" }}>Company Registration</span></p>
                  <p className="card-text"><span style={{ color: "#007185" }}>Register your company in less than 7 days through a seamless.</span></p>
                  <p className="card-text">Market Price : <span style={{ textDecoration: "line-through", fontWeight: "500" }}>INR 7,899</span></p>
                  <p className="card-text">Offer Price : <span style={{ color: "#B12704", fontWeight: "600" }}>INR 6,899</span></p>
                  <p className="card-text">Discount : <span style={{ color: "#2AA644", fontWeight: "600" }}>INR 1,000 (13% off)</span></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="card custom_card">
                <img src="https://img.indiafilings.com/catalog/opc-registration-india.webp" className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"><span style={{ fontWeight: "600" }}>Company Registration</span></p>
                  <p className="card-text"><span style={{ color: "#007185" }}>Register your company in less than 7 days through a seamless.</span></p>
                  <p className="card-text">Market Price : <span style={{ textDecoration: "line-through", fontWeight: "500" }}>INR 7,899</span></p>
                  <p className="card-text">Offer Price : <span style={{ color: "#B12704", fontWeight: "600" }}>INR 6,899</span></p>
                  <p className="card-text">Discount : <span style={{ color: "#2AA644", fontWeight: "600" }}>INR 1,000 (13% off)</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="card custom_card">
                <img src="https://img.indiafilings.com/catalog/proprietorship-india.webp" className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"><span style={{ fontWeight: "600" }}>Company Registration</span></p>
                  <p className="card-text"><span style={{ color: "#007185" }}>Register your company in less than 7 days through a seamless.</span></p>
                  <p className="card-text">Market Price : <span style={{ textDecoration: "line-through", fontWeight: "500" }}>INR 7,899</span></p>
                  <p className="card-text">Offer Price : <span style={{ color: "#B12704", fontWeight: "600" }}>INR 6,899</span></p>
                  <p className="card-text">Discount : <span style={{ color: "#2AA644", fontWeight: "600" }}>INR 1,000 (13% off)</span></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="card custom_card">
                <img src="https://img.indiafilings.com/catalog/LLP-Registration.png" className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"><span style={{ fontWeight: "600" }}>Company Registration</span></p>
                  <p className="card-text"><span style={{ color: "#007185" }}>Register your company in less than 7 days through a seamless.</span></p>
                  <p className="card-text">Market Price : <span style={{ textDecoration: "line-through", fontWeight: "500" }}>INR 7,899</span></p>
                  <p className="card-text">Offer Price : <span style={{ color: "#B12704", fontWeight: "600" }}>INR 6,899</span></p>
                  <p className="card-text">Discount : <span style={{ color: "#2AA644", fontWeight: "600" }}>INR 1,000 (13% off)</span></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="card custom_card">
                <img src="https://img.indiafilings.com/catalog/Partnership-Registration.png" className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"><span style={{ fontWeight: "600" }}>Company Registration</span></p>
                  <p className="card-text"><span style={{ color: "#007185" }}>Register your company in less than 7 days through a seamless.</span></p>
                  <p className="card-text">Market Price : <span style={{ textDecoration: "line-through", fontWeight: "500" }}>INR 7,899</span></p>
                  <p className="card-text">Offer Price : <span style={{ color: "#B12704", fontWeight: "600" }}>INR 6,899</span></p>
                  <p className="card-text">Discount : <span style={{ color: "#2AA644", fontWeight: "600" }}>INR 1,000 (13% off)</span></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="card custom_card">
                <img src="https://img.indiafilings.com/catalog/indiafilings-India-Business-Setup.jpg" className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"><span style={{ fontWeight: "600" }}>Company Registration</span></p>
                  <p className="card-text"><span style={{ color: "#007185" }}>Register your company in less than 7 days through a seamless.</span></p>
                  <p className="card-text">Market Price : <span style={{ textDecoration: "line-through", fontWeight: "500" }}>INR 7,899</span></p>
                  <p className="card-text">Offer Price : <span style={{ color: "#B12704", fontWeight: "600" }}>INR 6,899</span></p>
                  <p className="card-text">Discount : <span style={{ color: "#2AA644", fontWeight: "600" }}>INR 1,000 (13% off)</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="card custom_card">
                <img src="https://img.indiafilings.com/catalog/Nidhi-Company-india.png" className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"><span style={{ fontWeight: "600" }}>Company Registration</span></p>
                  <p className="card-text"><span style={{ color: "#007185" }}>Register your company in less than 7 days through a seamless.</span></p>
                  <p className="card-text">Market Price : <span style={{ textDecoration: "line-through", fontWeight: "500" }}>INR 7,899</span></p>
                  <p className="card-text">Offer Price : <span style={{ color: "#B12704", fontWeight: "600" }}>INR 6,899</span></p>
                  <p className="card-text">Discount : <span style={{ color: "#2AA644", fontWeight: "600" }}>INR 1,000 (13% off)</span></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="card custom_card">
                <img src="https://img.indiafilings.com/catalog/company-registration-india.png" className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"><span style={{ fontWeight: "600" }}>Company Registration</span></p>
                  <p className="card-text"><span style={{ color: "#007185" }}>Register your company in less than 7 days through a seamless.</span></p>
                  <p className="card-text">Market Price : <span style={{ textDecoration: "line-through", fontWeight: "500" }}>INR 7,899</span></p>
                  <p className="card-text">Offer Price : <span style={{ color: "#B12704", fontWeight: "600" }}>INR 6,899</span></p>
                  <p className="card-text">Discount : <span style={{ color: "#2AA644", fontWeight: "600" }}>INR 1,000 (13% off)</span></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="card custom_card">
                <img src="https://img.indiafilings.com/catalog/Producer-Company-india.png" className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"><span style={{ fontWeight: "600" }}>Company Registration</span></p>
                  <p className="card-text"><span style={{ color: "#007185" }}>Register your company in less than 7 days through a seamless.</span></p>
                  <p className="card-text">Market Price : <span style={{ textDecoration: "line-through", fontWeight: "500" }}>INR 7,899</span></p>
                  <p className="card-text">Offer Price : <span style={{ color: "#B12704", fontWeight: "600" }}>INR 6,899</span></p>
                  <p className="card-text">Discount : <span style={{ color: "#2AA644", fontWeight: "600" }}>INR 1,000 (13% off)</span></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="card custom_card">
                <img src="https://img.indiafilings.com/catalog/company-registration-india.png" className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"><span style={{ fontWeight: "600" }}>Company Registration</span></p>
                  <p className="card-text"><span style={{ color: "#007185" }}>Register your company in less than 7 days through a seamless.</span></p>
                  <p className="card-text">Market Price : <span style={{ textDecoration: "line-through", fontWeight: "500" }}>INR 7,899</span></p>
                  <p className="card-text">Offer Price : <span style={{ color: "#B12704", fontWeight: "600" }}>INR 6,899</span></p>
                  <p className="card-text">Discount : <span style={{ color: "#2AA644", fontWeight: "600" }}>INR 1,000 (13% off)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bank_card_price">
        <div className="container">
          <h2>Get the Right Banking Partner for your Startup</h2>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="bank_card">
                <img src="https://img.ledgers.cloud/assets/ICICI_Bank_Logo.svg" alt="img" style={{ marginBottom: "0.5rem" }} />
                <p>Initial Funding INR 25,000</p>
                <div className="item">Zero Balance Account <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Free IMPS/NEFT/RTGS <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Debit Card <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">UPI QR Code <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Payment Gateway <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">LEDGERS Banking Suite <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">LEDGERS - API Banking <i className="fa fa-check-circle tick"></i></div>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="bank_card">
                <img src="https://img.indiafilings.com/catalog/dbs_bank.svg" alt="img" style={{ marginBottom: "0.5rem" }} />
                <p>Initial Funding INR 25,000</p>
                <div className="item">Zero Balance Account <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Free IMPS/NEFT/RTGS <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Debit Card <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">UPI QR Code <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Payment Gateway <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">LEDGERS Banking Suite <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">LEDGERS - API Banking <i className="fa fa-check-circle tick"></i></div>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="bank_card">
                <img src="https://img.ledgers.cloud/assets/bank/Yes_Bank_Logo.svg" alt="img" style={{ marginBottom: "0.5rem" }} />
                <p>Initial Funding INR 25,000</p>
                <div className="item">Zero Balance Account <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Free IMPS/NEFT/RTGS <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Debit Card <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">UPI QR Code <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Payment Gateway <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">LEDGERS Banking Suite <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">LEDGERS - API Banking <i className="fa fa-check-circle tick"></i></div>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="bank_card">
                <img src="https://img.ledgers.cloud/assets/bank/Axis_Bank_logo.svg" alt="img" style={{ marginBottom: "0.5rem" }} />
                <p>Initial Funding INR 25,000</p>
                <div className="item">Zero Balance Account <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Free IMPS/NEFT/RTGS <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Debit Card <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">UPI QR Code <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">Payment Gateway <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">LEDGERS Banking Suite <i className="fa fa-check-circle tick"></i></div>
                <hr />
                <div className="item">LEDGERS - API Banking <i className="fa fa-check-circle tick"></i></div>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Incometax;
