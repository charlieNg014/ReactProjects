import React, { Component } from "react";
import "../css/shoppingcartStyle.css";
import img from "./assets/img/01-thumbnail.jpg";
import { ProductConsumer } from "./context";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal, detailProduct, addToCart } = value;
          // const {id, title, subtitle, image} = value.detailProduct;
          console.log(detailProduct.title);
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="container my-modal">
                <div className="row col-md-6 row-modal">
                  {/* <button className="exit-btn">X</button> */}
                  <img
                    src={detailProduct.image}
                    alt="product"
                    className="img-fluid img-modal"
                  />
                  <div className="modal-text text-lg-center">
                    <h2 className="cakename ">{detailProduct.title}</h2>
                    <h4 className="cakedes text-center">{detailProduct.subtitle}</h4>
                    <div className="button">
                      <button
                        className="exit-btn text-center"
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Products
                      </button>

                      <button
                        className="addcart-btn text-center"
                        onClick={() => {
                          addToCart(detailProduct.id);
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
