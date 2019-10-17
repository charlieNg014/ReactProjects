import React, { Component } from "react";
import "./landingPageStyle.css";

class SinglePortfolio extends Component {
  render() {
    return (
      <div className="col-md-4 portfolio-item text-center" style={{height: '180px'}}>
        <a className="portfolio-link" data-toggle="modal" href="/product">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x portfolio-icon"></i>
            </div>
          </div>
          <img className="img-fluid" src="images/agent.jpg" alt="" />
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
