import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ icon, name, to }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <Link
        to={to}
        className="text-decoration-none"
        style={{ color: "inherit" }}
      >
        <div
          className="card shadow-sm text-center p-4 mb-4 rounded-4 h-100"
          style={{ cursor: "pointer", transition: "0.3s" }}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <div className="display-4 text-primary mb-3">{icon}</div>
            <h5 className="fw-bold text-primary">{name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
