// import React from "react";

export default function Footer() {
  const stop = (e) => e.preventDefault();

  return (
    <div
      className="container-fluid mt-5 py-5 px-3 px-md-5"
      style={{ backgroundColor: "#F4F4F9" }}
    >
      <div className="row">
        <div className="col-12 col-md-3 mb-4 mb-md-0 text-center text-md-start">
          <img
            className="mb-3"
            src="\media\logo.svg"
            alt="logo"
            style={{ width: "50%", maxWidth: "150px" }}
          />
          <p>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>

          <div className="d-flex justify-content-center justify-content-md-start flex-wrap gap-2">
            <a href="/" onClick={stop} className="text-dark fs-5">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="/" onClick={stop} className="text-dark fs-5">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="/" onClick={stop} className="text-dark fs-5">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/" onClick={stop} className="text-dark fs-5">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="/" onClick={stop} className="text-dark fs-5">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="/" onClick={stop} className="text-dark fs-5">
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
            <a href="/" onClick={stop} className="text-dark fs-5">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>

        <div className="col-6 col-md-3 mb-4 mb-md-0">
          <h6 className="fw-bold">Account</h6>
          <ul className="list-unstyled text-muted">
            {[
              "Minor demat account",
              "Open demat account",
              "NRI demat account",
              "Commodity",
              "Dematerialisation",
              "Fund transfer",
              "MTF",
              "Referral program",
            ].map((text) => (
              <li key={text}>
                <a
                  href="/"
                  onClick={stop}
                  className="text-muted text-decoration-none"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-6 col-md-3 mb-4 mb-md-0">
          <h6 className="fw-bold">Support</h6>
          <ul className="list-unstyled text-muted">
            {[
              "Contact us",
              "Support portal",
              "How to file a complaint?",
              "Status of your complaints",
              "Bulletin",
              "Circular",
              "Z-Connect blog",
              "Downloads",
            ].map((text) => (
              <li key={text}>
                <a
                  href="/"
                  onClick={stop}
                  className="text-muted text-decoration-none"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-6 col-md-3 mb-4 mb-md-0">
          <h6 className="fw-bold">Company</h6>
          <ul className="list-unstyled text-muted">
            {[
              "About",
              "Philosophy",
              "Press & media",
              "Careers",
              "Zerodha Cares (CSR)",
              "Zerodha.tech",
              "Open source",
            ].map((text) => (
              <li key={text}>
                <a
                  href="/"
                  onClick={stop}
                  className="text-muted text-decoration-none"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 text-muted" style={{ fontSize: "small" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
          no.: INZ000031633...
        </p>
        <p>Procedure to file a complaint on SEBI SCORES...</p>
        <p>Investments in securities market are subject to market risks.</p>
      </div>

      <div className="d-flex flex-wrap gap-3 mt-3">
        {[
          "NSE",
          "BSE",
          "MCX",
          "Terms & conditions",
          "Policies & procedures",
          "Privacy policy",
          "Disclosure",
          "For investor's attention",
          "Investor charter",
        ].map((text) => (
          <a
            key={text}
            href="/"
            onClick={stop}
            className="text-muted text-decoration-none"
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}
