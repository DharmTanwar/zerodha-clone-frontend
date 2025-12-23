import React from "react";

export default function Footer() {
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
            <a href="#" className="text-dark fs-5">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="text-dark fs-5">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#" className="text-dark fs-5">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-dark fs-5">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="text-dark fs-5">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="text-dark fs-5">
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
            <a href="#" className="text-dark fs-5">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>

        
        <div className="col-6 col-md-3 mb-4 mb-md-0">
          <h6 className="fw-bold">Account</h6>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Minor demat account
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Open demat account
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                NRI demat account
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Commodity
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Dematerialisation
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Fund transfer
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                MTF
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Referral program
              </a>
            </li>
          </ul>
        </div>

       
        <div className="col-6 col-md-3 mb-4 mb-md-0">
          <h6 className="fw-bold">Support</h6>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Support portal
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                How to file a complaint?
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Status of your complaints
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Bulletin
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Circular
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Z-Connect blog
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Downloads
              </a>
            </li>
          </ul>
        </div>

      
        <div className="col-6 col-md-3 mb-4 mb-md-0">
          <h6 className="fw-bold">Company</h6>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#" className="text-muted text-decoration-none">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Philosophy
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Press & media
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Zerodha Cares (CSR)
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Zerodha.tech
              </a>
            </li>
            <li>
              <a href="#" className="text-muted text-decoration-none">
                Open source
              </a>
            </li>
          </ul>
        </div>
      </div>

     
      <div className="mt-4 text-muted" style={{ fontSize: "small" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019...
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal...
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
      </div>

     
      <div className="d-flex flex-wrap gap-3 mt-3">
        <a href="#" className="text-muted text-decoration-none">
          NSE
        </a>
        <a href="#" className="text-muted text-decoration-none">
          BSE
        </a>
        <a href="#" className="text-muted text-decoration-none">
          MCX
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Terms & conditions
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Policies & procedures
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Privacy policy
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Disclosure
        </a>
        <a href="#" className="text-muted text-decoration-none">
          For investor's attention
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Investor charter
        </a>
      </div>
    </div>
  );
}
