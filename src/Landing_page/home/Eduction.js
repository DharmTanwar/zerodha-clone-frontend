import React from "react";

export default function Education() {
  return (
    <div className="container mt-5 p-4 p-md-5 text-muted">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="\media\education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>

        
        <div className="col-12 col-md-6">
          <h3>Free and open market education</h3>
          <p className="mt-3">
            Varsity, the largest online stock market education book in the world covering
            everything from the basics to advanced trading.
          </p>
          <a href="" className="d-inline-block mb-3" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>
          <a href="" className="d-inline-block" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
