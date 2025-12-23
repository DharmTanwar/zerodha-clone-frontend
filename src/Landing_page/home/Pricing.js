import React from "react";

export default function Pricing() {
  return (
    <div className="container p-4 p-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1>Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="d-none d-md-block col-md-2"></div>

        
        <div className="col-12 col-md-6">
          <div className="row text-center text-md-end">
            <div className="col-12 col-sm-4 mb-4 mb-sm-0">
              <img
                src="\media\pricingEquity.svg"
                alt="Free account"
                className="img-fluid mb-2"
              />
              <p className="text-muted">Free account opening</p>
            </div>
            <div className="col-12 col-sm-4 mb-4 mb-sm-0">
              <img
                src="\media\pricing0.svg"
                alt="Equity delivery"
                className="img-fluid mb-2"
              />
              <p className="text-muted">Free equity delivery & direct mutual funds</p>
            </div>
            <div className="col-12 col-sm-4">
              <img
                src="\media\intradayTrades.svg"
                alt="Intraday trades"
                className="img-fluid mb-2"
              />
              <p className="text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
