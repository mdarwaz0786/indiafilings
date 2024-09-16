import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card mt-5 mb-5" style={{ border: "none" }}>
              <div className="card-body text-center">
                <img className="img-fluid mb-4" style={{ width: "7rem" }} src="https://img.indiafilings.com/catalog/logo-110x52.png" alt="logo" />
                <h3 className="mb-1">Login</h3>
                <form className="text-start">
                  <div className="form-group mb-4">
                    <label htmlFor="email" className="mb-2">Email <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="mb-2">Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100" onClick={() => navigate("/")}>Login</button>
                </form>
                <div className="text-center mt-3">
                  <p>New user? <Link to="/signup">Sign Up</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;