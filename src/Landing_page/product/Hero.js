import React from "react";

export default function Hero() {
  return (
    <div className="container mt-5 border-bottom">
      <div className="row">
        <div className="col-12 text-center mt-5 text-muted">
          <h2>Zerodha Products</h2>
          <h3>Sleek, modern, and intuitive trading platforms</h3>
          <p className="mt-3 fs-5">
            Check out our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              investment offerings →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
