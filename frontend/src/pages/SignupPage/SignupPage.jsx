import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card mt-2 mb-5" style={{ border: "none" }}>
              <div className="card-body text-center">
                <img src="https://img.indiafilings.com/catalog/logo-110x52.png" alt="logo" className="img-fluid mb-4" style={{ width: "7rem" }} />
                <h3 className="mb-1">Sign Up</h3>
                <form className="text-start">
                  <div className="form-group mb-3">
                    <label htmlFor="name" className="mb-2">Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="mobile" className="mb-2">Mobile <span className="text-danger">*</span></label>
                    <input type="tel" className="form-control" id="mobile" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="mb-2">Email address <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="mb-2">Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100" onClick={() => navigate("/")}>Sign Up</button>
                </form>
                <div className="text-center mt-3">
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;