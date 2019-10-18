import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landingPageStyle.css";

class Header extends Component {
  render() {
    return (
      //Creating props to use in any pages later on
      <div>
        <header className="masthead" style={{ height: `${this.props.height}` }}>
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in"> {this.props.title} </div>{" "}
              <div className="intro-heading text-uppercase">
                {" "}
                {this.props.subtitle}{" "}
              </div>{" "}
              {this.props.showButton && (
                <div className="center-button">
                  <Link to={this.props.link}>
                    <button
                      className="btn text-uppercase header-btn"
                      href={this.props.link}
                    >
                      {this.props.buttonText}{" "}
                    </button>{" "}
                  </Link>{" "}
                </div>
              )}{" "}
            </div>{" "}
          </div>{" "}
        </header>{" "}
      </div>
    );
  }
}
export default Header;
