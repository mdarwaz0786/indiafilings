import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center notFoundWrapper">
      <div className="text-center">
        <h1 className="display-1 text-danger errorCode">404</h1>
        <h2 className="display-4">Page Not Found</h2>
        <p className="lead">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary homeButton">Go Back Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
