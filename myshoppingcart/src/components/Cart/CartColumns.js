import React from "react";
import './cartStyle.css';

export default function CartColumns() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        {/* <div className="col-10 mx-auto col-lg-2"> */}
          <div className="text-uppercase">Products</div>{"  "}
        {/* </div> */}

        {/* <div className="col-10 mx-auto col-lg-2"> */}
          <div className="text-uppercase">Name</div>
        {/* </div> */}

        {/* <div className="col-10 mx-auto col-lg-2"> */}
          <p className="text-uppercase">Price</p>
        {/* </div> */}

        {/* <div className="col-10 mx-auto col-lg-2"> */}
          <p className="text-uppercase">Quantity</p>
        {/* </div> */}

        {/* <div className="col-10 mx-auto col-lg-2"> */}
          <p className="text-uppercase">Remove</p>
        {/* </div> */}

        {/* <div className="col-10 mx-auto col-lg-2"> */}
          <p className="text-uppercase">Total</p>
        {/* </div> */}
      </div>
    </div>
  );
}
