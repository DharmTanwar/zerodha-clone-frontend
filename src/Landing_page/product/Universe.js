import React from "react";

export default function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center text-muted">
        <h1>The Zerodha Universe</h1>
        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-12 col-md-4 p-3 mb-5">
          <img  className="img-fluid  mb-3" style={{ width: "60%" }} src="\media\zerodhaFundhouse.png" />
          <br />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3">
          <img  className="img-fluid mb-3" style={{ width: "50%" }} src="\media\sensibullLogo.svg" />
          <br />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3">
          <img className="img-fluid mb-3" style={{width:"40%"}} src="\media\tijori.svg" />
          <br />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
           <div className="col-12 col-md-4 p-3">
          <img className="img-fluid mb-3" style={{width:"45%"}} src="\media\streakLogo.png" />
          <br />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3">
          <img 
         className="img-fluid mb-3" style={{width:"45%"}} src="\media\smallcaseLogo.png" />
          <br />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3">
              <img className="img-fluid mb-3" style={{width:"40%"}} src="\media\dittoLogo.png" />
          <br />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
      </div>
    </div>
  );
}
