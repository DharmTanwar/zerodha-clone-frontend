// import React from "react";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid mb-5 p-5 text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <img
            src="\media\homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
            style={{ maxWidth: "100%", height: "auto" }}
          />

          <h1 className="fw-bold fs-1 fs-md-2 fs-lg-1">Invest in everything</h1>

          <h5 className="text-secondary mt-3 fs-6 fs-md-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </h5>

          <button
            type="button"
            className="btn btn-primary btn-lg mt-4 w-75 w-md-50 w-lg-25 fs-5"
            style={{
              width: "auto",
              minWidth: "160px",
              maxWidth: "200px",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}
