import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="pt-5 pb-5 home_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img className="img-fluid large_screen" src="https://img.indiafilings.com/catalog/IndiaFilings-Helping-Entrepreneurs.webp" alt="img" />
              <img className="img-fluid mobile_screen" src="https://img.indiafilings.com/catalog/IndiaFilings-Mobile-banner.webp" alt="img" />
            </div>
          </div>
        </div>
      </section>

      <section className="ex_our_ser" style={{ background: "#F7F9FB" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Explore our digital services stack</h1>
              <p className="lead mb-5">
                Grow your business and remain compliance by
                partnering with IndiaFilings for a range of high quality, business services from
                incorporation to payroll delivered through a seamless online platform.
              </p>

              <div className="d-flex justify-content-between text-center flex-md-column flex-lg-row flex-column flex-sm-column">
                <Link to="#" className="p-20 service mb-md-3 mb-3 align-self-lg-end">
                  <div>
                    <img src="https://img.indiafilings.com/catalog/corporation_icon.png" className="img-fluid" alt="Incorporation Services" />
                    <p className="m-b-0 p-t-15 font-weight-600">Incorporation</p>
                  </div>
                </Link>

                <Link to="#" className="p-20 service mb-md-3 mb-3 align-self-lg-end">
                  <div>
                    <img src="https://img.indiafilings.com/catalog/TM-icon.png" className="img-fluid" alt="Accounting Services" />
                    <p className="m-b-0 p-t-15 font-weight-600">Trademark</p>
                  </div>
                </Link>

                <Link to="#" className="p-20 service mb-md-3 mb-3 align-self-lg-end">
                  <div>
                    <img src="https://img.indiafilings.com/catalog/Accounting-icon.png" className="img-fluid" alt="Accounting Services" />
                    <p className="m-b-0 p-t-15 font-weight-600">Accounting</p>
                  </div>
                </Link>

                <Link to="#" style={{ flexGrow: "0.2" }} className="p-20 service mb-md-3 mb-3 align-self-lg-end">
                  <div>
                    <img src="https://img.indiafilings.com/catalog/Income-Tax-icon.png" className="img-fluid" alt="Income Tax" />
                    <p className="m-b-0 p-t-15 font-weight-600">Income Tax</p>
                  </div>
                </Link>

                <Link to="#" style={{ flexGrow: "0.2" }} className="p-20 service mb-md-3 mb-3 align-self-lg-end">
                  <div>
                    <img src="https://img.indiafilings.com/catalog/GST-Services_icon.png" className="img-fluid" alt="GST Services" />
                    <p className="m-b-0 p-t-15 font-weight-600">GST Services</p>
                  </div>
                </Link>

                <Link to="#" className="p-20 service mb-md-3 mb-3 align-self-lg-end">
                  <div>
                    <img src="https://img.indiafilings.com/catalog/Payroll-Services-icon.png" className="img-fluid" alt="Payroll Services" />
                    <p className="m-b-0 p-t-15 font-weight-600">Payroll</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="second_se" className="p-b-40 p-t-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <video width="auto" height="auto" controls={true} autoPlay={true} loop={true} muted={true} className="border-23 m-border-8">
                <source src="https://img.indiafilings.com/videos/IndiaFilings-The-Journey!.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="col-lg-4">
              <h2 className="our_story">Our Story!</h2>
              <p className="lead">We are on a mission to make Entrepreneurship easier and
                affordable to millions. IndiaFilings provides a simple and intuitive platform for setting up
                a business and managing compliance. We started our journey in 2014 and bootstrapped the
                business till 2022, serving over 1 lakh businesses. In 2022, we raised funding from
                institutional investors to further our mission. <br />Know more <span><Link to="https://www.indiafilings.com/about-us">about IndiaFilings</Link></span>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-t-15 p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 img_mob_show_hide">
              <Link href="#"><img src="https://img.indiafilings.com/catalog/Consult-our-Accountants.webp" alt="IndiaFilings Consult Our Accountants" className="img-fluid" /></Link>
            </div>
            <div className="col-lg-6 img_mob_show d-none">
              <Link href="#"><img src="https://img.indiafilings.com/catalog/Consult-our-Accountants-mobile.webp" alt="IndiaFilings Consult Our Accountants" className="img-fluid" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="p-b-40 p-t-100 mob-pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pb-4">
              <h2 className="p-b-15">Industry leading partnerships</h2>
              <p className="lead">We work with top Indian Institutions to further our shared mission of improving
                ease of doing business and promoting Entrepreneurship in India.</p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="col-lg-12 img_mob_show_hide">
              <img src="https://img.indiafilings.com/catalog/IndaiFilings-Industry-leading-partnerships-updated.webp" alt="IndaiFilings-Industry-leading-partnerships" className="img-fluid" />
            </div>
            <div className="col-lg-6 img_mob_show d-none">
              <img src="https://img.indiafilings.com/catalog/IndaiFilings-partnerships-logo.webp" alt="IndaiFilings-Industry-leading-partnerships" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="app_sec p-t-40 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img style={{ borderRadius: "0.5rem" }} src="https://img.indiafilings.com/catalog/Enterprise-Partnership-mobile.webp" className="img-fluid google_play_btn mobile-mb-0 mob-border-top" alt="Google Play" loading="lazy" />
            </div>

            <div className="col-lg-8">
              <h2 className="white-line">Enterprise Partnership</h2>
              <p className="lead">If you are an independent professional, firm, enterprise client, bank,
                or government organization, we invite you to reach out to our Enterprise Partnership Team.
                Our dedicated Enterprise Team is committed to collaborating with a diverse range of clients
                including professionals, banks, enterprise clients, and government departments to create
                customized solutions that meet specific requirements. Contact us today to explore
                partnership opportunities to work together and create value.
              </p>
              <button className="btn btn-danger" style={{ background: "#ff0100", borderColor: "#ff0100" }}>Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;