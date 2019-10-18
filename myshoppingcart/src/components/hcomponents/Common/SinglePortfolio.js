import React, { Component } from "react";
import "./landingPageStyle.css";

class SinglePortfolio extends Component {
  render() {
    return (
      <div
        className="col-md-4 portfolio-item text-center"
        style={{ height: "240px" }}
      >
        <a className="portfolio-link" data-toggle="modal" href="/product">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <div className="fas">
                <img
                  className="img-fluid portfolio-img"
                  style={{ width: "180px", height: "130px" }}
                  src={this.props.image}
                  alt="portimage"
                 />
              </div>
            </div>
          </div>
        </a>
        <div className="portfolio-caption">
          <h4>{this.props.title}</h4>
          <p className="text-muted">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}
export default SinglePortfolio;
