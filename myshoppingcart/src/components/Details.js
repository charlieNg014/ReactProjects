import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import '../css/style.css';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            origin,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row" class="main-text">
                <div className="col-10 mx-auto text-content text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              {/* Product info */}
              <div className="row">
                <div className="display-image col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} style = {{width:'400px', height:'300px'}} className="img-fluid" alt="product" />
                </div>

                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>{title}</h1>

                  {/* Made by */}
                  <h4 className="text-title text-uppercase tex-muted mt-3 mb-2">
                    Made by: <span className="text-uppercase">{origin}</span>
                  </h4>

                  {/* Price  */}
                  <h4 className="text-blue">
                    <strong>
                      Price: <span>$</span>
                      {price}
                    </strong>
                  </h4>

                  {/* Description  */}
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Description:
                  </p>
                  <p className="text-muted lead">{info}</p>

                  {/* button  */}
                  <div>
                    <Link to="/">
                      <ButtonContainer className="left-button">Back to Product</ButtonContainer>
                    </Link>
                    
                    <ButtonContainer className="right-button"
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Add To Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
