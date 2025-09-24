import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="fw-semibold mb-3">Oops! Page Not Found</h2>
      <p className="text-muted mb-4" style={{ maxWidth: "400px" }}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button
        className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
        onClick={() => navigate("/")}
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default NotFound;
