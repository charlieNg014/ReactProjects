import React, { Component } from "react";
import SinglePortfolio from "./SinglePortfolio";
import Header from "./Header";
import Contact from "./Contact";

import "./landingPageStyle.css";

const portfolios = [
  { title: "Macaron", subtitle: "1", image: "img/maccaroncake.jpg" },
  { title: "Red Velvet", subtitle: "2", image: "img/redvelvet.jpg" },
  { title: "Chiffon", subtitle: "3", image: "img/chiffoncake.jpg" },
  { title: "Cheese cake", subtitle: "4", image: "img/cheesecake.jpg" },
  { title: "Chocolate cake", subtitle: "5", image: "img/chocolatecake.jpg" },
  { title: "Angel Food", subtitle: "6", image: "img/angelfoodcake.jpg" }
];

class Portfolio extends Component {
  render() {
    return (
      <section className="bg-light page-section text-center" id="portfolio">
        {" "}
        {this.props.noHeader || (
          <Header
            title="Porfolio"
            buttonText="MENU"
            link="/Product"
            showButton={true}
          />
        )}{" "}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> Portfolio </h2>{" "}
              <h3 className="section-subheading text-muted"> Our Porfolio </h3>{" "}
            </div>{" "}
            <div className="row">
              {" "}
              {portfolios.map((porfolio, index) => {
                return <SinglePortfolio {...porfolio} key={index} />;
              })}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {this.props.noContact || <Contact />}{" "}
      </section>
    );
  }
}
export default Portfolio;
