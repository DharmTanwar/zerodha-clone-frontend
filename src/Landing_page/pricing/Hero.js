// import React from "react";

export default function Hero() {
  return (
    <div className="container  border-bottom">
      <div className="row text-center mt-5 p-5">
        <h1 className="text-muted mt-3 mb-5">Charges</h1>
        <p className="text-muted fs-4 fw-medium">
          List of all charges and taxes
        </p>
        <div className="col-12 col-md-4 mt-5">
          <img className="img-fluid" alt="price" style={{width:"70%"}} src="\media\pricing0.svg" />
          <h1 className="text-muted mt-3">Free equity delivery</h1>
          <p className="text-muted fs-5">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-5">
          <img className="img-fluid"  alt="trade" style={{width:"70%"}}src="\media\intradayTrades.svg" />
        
          <h1 className="text-muted mt-3">Intraday and F&O trades</h1>
          <p className="text-muted fs-5 ">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-5">
          <img className="img-fluid"style={{width:"70%"}} alt="price" src="\media\pricing0.svg" />
          <h1 className="text-muted mt-3">Free direct MF</h1>
          <p className="text-muted fs-5 ">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
