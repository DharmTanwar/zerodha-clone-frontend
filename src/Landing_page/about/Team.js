import React from "react";

export default function Team() {
  return (
    <div className="container-fluid container mt-5 border-top">
      <div className="row ">
        <div className="col-12 col-md-6 text-center">
          <img
            className=" rounded-circle img-fluid mt-5 mb-3 " style={{width:"40%"}}
            src="\media\nithinKamath.jpg"
          />
          <h4 className="text-muted">Nithin Kamath</h4>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-12 col-md-6 mt-5 fw-medium fs-6 text-muted" >
          {" "}
                    <h3 className="mb-3">People</h3>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.{" "}
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a style={{ textDecoration: "none" }} href="">
              Homepage
            </a>{" "}
            /
            <a style={{ textDecoration: "none" }} href="">
              TradingQnA
            </a>{" "}
            /
            <a style={{ textDecoration: "none" }} href="">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
