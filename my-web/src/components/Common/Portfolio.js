import React, { Component } from "react";

//Re-usable items
import PortfolioItem from "./PortfolioItem";
import Contact from "../Pages/Contact";
import Header from "../Common/Header";
import Modal from "./Modal";

//import images
import image from "./assets/img/baking.jpeg";
import img1 from "./assets/img/01-thumbnail.jpg";
import img2 from "./assets/img/02-thumbnail.jpg";
import img3 from "./assets/img/03-thumbnail.jpg";
import img4 from "./assets/img/04-thumbnail.jpg";
import img5 from "./assets/img/05-thumbnail.jpg";
import img6 from "./assets/img/06-thumbnail.jpg";

const porfolio = [
  {
    id: 1,
    title: "Cheese Cake",
    subtitle: "A perfect cake for picnic or family",
    image: img1
  },

  {
    id: 2,
    title: "Macarons",
    subtitle: "Tiny but beautiful",
    image: img2
  },

  {
    id: 3,
    title: "Red Velvet",
    subtitle: "Enjoy the velvet",
    image: img3
  },

  {
    id: 4,
    title: "Mousse Cake",
    subtitle: "Strawberry with mousse",
    image: img4
  },

  {
    id: 5,
    title: "Watermelon Cake",
    subtitle: "Perfect combination of watermelon and cake",
    image: img5
  },

  {
    id: 6,
    title: "Buscuit Cake",
    subtitle: "A bees-kwee",
    image: img6
  }
];

class Portfolio extends Component {
  render() {
    return (
      <div>
        {" "}
        {this.props.noHeader || (
          <Header
            subtitle="PORTFOLIO"
            buttonText="ORDER NOW"
            link="/"
            showButton={true}
            image={image}
          />
        )}{" "}
        <section className="bg-light page-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase"> Portfolio </h2>{" "}
                <h3 className="section-subheading text-muted">
                  {" "}
                  My lovely cakes are displayed below{" "}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            {/* mapping through the element of an array */}{" "}
            <div className="row">
              {" "}
              {porfolio.map((item, index) => {
                return <PortfolioItem {...item} key={index} />;
              })}{" "}
              
              <Modal />
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {this.props.noContact || <Contact />}{" "}
        {/* {this.props.noFooter || <Footer />} */}{" "}
      </div>
    );
  }
}

export default Portfolio;
