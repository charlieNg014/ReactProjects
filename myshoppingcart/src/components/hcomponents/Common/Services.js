import React, { Component } from "react";
import SingleService from "./SingleService";
import Header from "./Header";
import Contact from "./Contact";
import "./landingPageStyle.css";

const services = [
  {
    title: "Picnic",
    description: "Enjoy cakes with any road trips",
    icon: "fa-shopping-cart"
  },
  { title: "Birthday", description: "Happy Birthday", icon: "fa-laptop" },
  {
    title: "Family outing",
    description: "Description goes here",
    icon: "fa-shopping-cart"
  }
];

class Services extends Component {
  render() {
    return (
      <section className="page-section" id="services">
        {" "}
        {this.props.noHeader || (
          <Header
            title="Services"
            buttonText="OUR PRODUCTS"
            link="/Portfolio"
            showButton={true}
            // image={image}
          />
        )}{" "}
        <div className="container service-con">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> Services </h2>{" "}
              <h3 className="section-subheading text-muted text-center">
                Enjoy our services{" "}
              </h3>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row text-service text-center">
            {" "}
            {services.map((service, index) => {
              return <SingleService {...service} key={index} />;
            })}{" "}
          </div>{" "}
        </div>{" "}
        {this.props.noContact || <Contact />}{" "}
      </section>
    );
  }
}

export default Services;
