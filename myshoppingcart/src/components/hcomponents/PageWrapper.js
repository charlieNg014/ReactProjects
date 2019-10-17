import React, { Component } from "react";
import { Link } from "react-router-dom";
import {ButtonContainer} from "../Button";
import "./Common/landingPageStyle.css";


class PageWrapper extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="main-text navbar-brand js-scroll-trigger" href="/">
            Dan's Bakery
          </a>
          <div className="navbar-nav service-text align-items-center">
            <li className="nav-item ml-5">
              <Link to="/services" className="nav-link">
                Services{" "}
              </Link>{" "}
            </li>{" "}
          </div>{" "}
          <div className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/portfolio" className="nav-link">
                Porfolio{" "}
              </Link>{" "}
            </li>{" "}
          </div>{" "}
          <div className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/about" className="nav-link">
                About{" "}
              </Link>{" "}
            </li>{" "}
          </div>{" "}
          <div className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/team" className="nav-link">
                Team{" "}
              </Link>{" "}
            </li>{" "}
          </div>{" "}
          <div className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/contact" className="nav-link">
                Contact{" "}
              </Link>{" "}
            </li>{" "}
          </div>{" "}
          <div className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/product" className="nav-link">
                Products{" "}
              </Link>{" "}
            </li>{" "}
          </div>{" "}
          {/* Cart */}{" "}
          <Link to="/cart" className="ml-auto">
            <ButtonContainer className="nav-btn">
              <div className="nav-btn">
                <span className="mr-2">
                  <i className="fas fa-cart-plus" />
                </span>
                My Cart{" "}
              </div>{" "}
            </ButtonContainer>{" "}
          </Link>{" "}
        </div>
      </nav>
    );
  }
}
export default PageWrapper;
