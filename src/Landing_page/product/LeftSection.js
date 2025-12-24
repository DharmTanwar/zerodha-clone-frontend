// import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  // googlePlay,
  // appStore,
}) {
  return (
    <div className="container mt-5 text-center  ">
      <div className="row">
        <div className="col-12 col-md-5">
          <img className="img-fluid" alt="url" src={imageURL} />
        </div>
        <div className="col-md-2"></div>
        <div className="col-12 col-md-5 fs-5 mt-5  text-start ">
          <h2>{productName}</h2>
          <p className="text-muted">{productDescription}</p>
          <br />
          <p>
            <a
              href="/"
              onClick={(e) => e.preventDefault()}
              className="text-decoration-none"
            >
              {tryDemo}
            </a>{" "}
            &nbsp; &nbsp; &nbsp;{" "}
            <a
              href="/"
              onClick={(e) => e.preventDefault()}
              className="text-decoration-none"
            >
              {learnMore}
            </a>
          </p>
          <br />
          <img
            className="img-fluid "
            alt="play"
            style={{ width: "32%" }}
            src="\media\googlePlayBadge.svg"
          />
          &nbsp; &nbsp;&nbsp;
          <img
            className="img-fluid "
            style={{ width: "30%" }}
            alt="store"
            src="\media\appstore-badge.svg"
          />
        </div>
      </div>
    </div>
  );
}
