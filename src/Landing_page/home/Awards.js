// import React from "react";

export default function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
       
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="\media\largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>

      
        <div className="col-12 col-md-6 p-4">
          <h1 className="fw-bold mb-3 text-center text-md-start">
            Largest stock broker in India
          </h1>

          <p className="mb-4 text-secondary text-center text-md-start">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India by trading and investing in:
          </p>

          
          <div className="row">
            <div className="col-12 col-sm-6">
              <ul className="list-unstyled">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="list-unstyled">
                <li>Stocks & IPO</li>
                <li>Direct mutual funds</li>
                <li>Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>

        
          <div className="text-center text-md-start mt-4">
            <img
              src="\media\pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
