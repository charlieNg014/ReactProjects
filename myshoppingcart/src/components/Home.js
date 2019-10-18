import React, { Component } from "react";
import Header from "./hcomponents/Common/Header";
import image from "../images/agent.jpg";
import Services from "./hcomponents/Common/Services";
import Portfolio from "./hcomponents/Common/Portfolio";
import About from "./hcomponents/Common/About";
import Team from "./hcomponents/Common/Team";
import Contact from "./hcomponents/Common/Contact";
import Footer from "./hcomponents/Common/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Bakery"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="SHOP NOW"
          link="/product"
          showButton={true}
          image={image}
          height="240px"
        />{" "}
        <Services noHeader noContact noFooter />
        <Portfolio noHeader noContact noFooter />
        <About noHeader noContact noFooter />
        <Team noHeader noContact noFooter />
        <Contact noHeader noFooter />
        <Footer height="40px" />
      </div>
    );
  }
}

export default Home;
