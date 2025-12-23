import React from "react";
import { useNavigate } from "react-router-dom";
export default function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container mb-5 p-4 p-md-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-8">
          <h3 className="text-muted mb-3">Open a Zerodha account</h3>
          <p className="mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg fs-5"
            style={{ width: "60%", maxWidth: "300px" }}
            onClick={() => navigate("/signup")}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}
