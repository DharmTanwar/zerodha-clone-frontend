import React from "react";

 export default function Hero() {
  return (
    <section
      className="container-fluid p-3 mb-2 bg-primary-subtle text-primary-emphasis"
      id="supportHero"
    >
      <div className="p-5 d-flex justify-content-between" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          {/* ✅ Updated Search Bar */}
          <div
            className="input-group shadow-sm my-3"
            style={{ maxWidth: "450px" }}
          >
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Eg. How do I activate F&O"
              aria-label="Search"
            />
            <button className="btn btn-primary px-4" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>

          <div className="d-flex flex-column gap-2 mt-3">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}


