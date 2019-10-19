import React, { Component } from "react";
import PortfolioItem from "./components/Common/PortfolioItem";
import "./components/css/shoppingcartStyle.css";
import Modal from "./components/Common/Modal";

//import reusable
import img1 from "./components/Common/assets/img/01-thumbnail.jpg";
import img2 from "./components/Common/assets/img/02-thumbnail.jpg";
import img3 from "./components/Common/assets/img/03-thumbnail.jpg";
import img4 from "./components/Common/assets/img/04-thumbnail.jpg";
import img5 from "./components/Common/assets/img/05-thumbnail.jpg";
import img6 from "./components/Common/assets/img/06-thumbnail.jpg";

const porfolio = [
  { id: 1, title: "Cheese Cake",subtitle: "A perfect cake for picnic or family",image: img1},
  { id: 2,title: "Macarons", subtitle: "Tiny but beautiful", image: img2 },
  { id: 3,title: "Red Velvet", subtitle: "Enjoy the velvet", image: img3 },
  { id: 4,title: "Mousse Cake", subtitle: "Strawberry with mousse", image: img4 },
  { id: 5,title: "Watermelon Cake",subtitle: "Perfect combination of watermelon and cake",image: img5},
  { id: 6,title: "Buscuit Cake", subtitle: "A bees-kwee", image: img6 }
];

class ShoppingCart extends Component {
  render() {
    return (
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">MENU</h2>
              <h3 className="section-subheading text-muted">Let's shop</h3>
            </div>
          </div>
          <div className="row">
            {porfolio.map((item, index) => {
              return <PortfolioItem {...item} key={index} />;
            })}
            <Modal />
          </div>
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
