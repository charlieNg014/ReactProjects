import React, { Component } from "react";
import SinglePortfolio from "./SinglePortfolio";
import "./landingPageStyle.css";

const portfolios = [
  { title: "Macaron", subtitle: "1" },
  { title: "Red Velvet", subtitle: "2" },
  { title: "Chiffon", subtitle: "3" },
  { title: "Cheese cake", subtitle: "4" },
  { title: "Chocolate cake", subtitle: "5" },
  { title: "Angel Food", subtitle: "6" }
];

class Portfolio extends Component {
  render() {
    return (
      <section className="bg-light page-section text-center" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Our Porfolio</h3>
            </div>
            <div className="row">
              {portfolios.map((porfolio, index) => {
                return <SinglePortfolio {...porfolio} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;
