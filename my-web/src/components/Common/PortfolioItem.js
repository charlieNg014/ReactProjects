import React, { Component } from "react";
import { ProductConsumer } from "./context";

class PortfolioItem extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { openModal, increament, decreament } = value;
          // const {id, title, subtitle, image} = value.detailProduct;

          return (
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal1"
              >
                <div className="portfolio-hover" onClick={() => {
                        //get the product of each item whe click
                        // getItem(this.props.id);
                        openModal(this.props.id);
                      }}>
                  <div className="portfolio-hover-content">
                    <i
                      className="fas fa-plus fa-3x"
                      
                    >
                      {" "}
                    </i>{" "}
                  </div>{" "}
                </div>{" "}
                <img
                  className="img-fluid"
                  style={{ width: "350px", height: "180px" }}
                  src={this.props.image}
                  alt=""
                />
              </a>{" "}
              <div className="portfolio-caption">
                <h4> {this.props.title} </h4>{" "}
                <p className="text-muted" style={{ height: "80px" }}>
                  {" "}
                  {this.props.subtitle}{" "}
                </p>{" "}
                <button
                  className="card-btn quantity-btn"
                  disabled={false}
                  onClick = {() => {
                    decreament(this.props.id);
                  }}
                >
                  -
                </button>
                <button
                  className="card-btn quantity"
                  disabled={false}
                >
                  0
                </button>
                <button
                  className="card-btn quantity-btn"
                  disabled={false}
                  onClick={() => {
                    increament(this.props.id);
                  }}
                >
                  +
                </button>
              </div>{" "}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default PortfolioItem;
