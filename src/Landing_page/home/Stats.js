// import React from "react";

export default function Stats() {
  return (
    <div className="container p-4 p-md-5">
      <div className="row align-items-center">
       
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5 mt-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker; contributing
            to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-5 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h2 className="fs-5 mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech
            startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate
            transactions, but actively help you do better with your money.
          </p>
        </div>

       
        <div className="col-12 col-md-6 text-center">
          <img
            src="\media\ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "75%", height: "auto" }}
          />

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-3">
            <a href=" " style={{ textDecoration: "none" }}>
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href=" " style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
