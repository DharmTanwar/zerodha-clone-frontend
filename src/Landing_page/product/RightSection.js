import React from "react";

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 text-center  ">
      <div className="row">
        <div className="col-12 col-md-5 fs-5 mt-5  text-start ">
          <h2>{productName}</h2>
          <p className="text-muted">{productDescription}</p>
          <br />
          <p>
            &nbsp; &nbsp; &nbsp;{" "}
            <a className="text-decoration-none" href="">
              {learnMore}
            </a>
          </p>
          <br />
        </div>
        <div className="col-md-2"></div>
        <div className="col-12 col-md-5">
          <img className="img-fluid" src={imageURL} />
        </div>
      </div>
    </div>
  );
}
