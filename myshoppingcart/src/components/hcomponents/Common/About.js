import React, { Component } from "react";
import Header from "./Header";
import Contact from "./Contact";
import "./landingPageStyle.css";

class About extends Component {
  render() {
    return (
      <section className="page-section" id="about">
        {this.props.noHeader || (
          <Header
            title="About Us"
            buttonText="Our Services"
            link="/Services"
            showButton={true}
          />
        )}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> About </h2>{" "}
              <h3 className="section-subheading text-muted">
                Story of kiddo and his baking passion{" "}
              </h3>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row">
            <div className="col-lg-12">
              <div className="timeline-image text-center">
                <img
                  className="rounded-circle"
                  src="img/fullservice.jpg"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>{" "}
              <div className="timeline-panel text-left">
                <div className="timeline-heading">
                  <h4> 2009 - 2011 </h4>{" "}
                  <h4 className="subheading"> Our Humble Beginnings </h4>{" "}
                </div>{" "}
                <div className="timeline-body">
                  <p className="text-muted">Description goes here</p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="timeline-image text-center">
                <img
                  className="rounded-circle"
                  src="img/fullservice.jpg"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>{" "}
              <div className="timeline-inverted text-right">
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4> March 2011 </h4>{" "}
                    <h4 className="subheading"> An Agency is Born </h4>{" "}
                  </div>{" "}
                  <div className="timeline-body">
                    <p className="text-muted">Description goes here</p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="timeline-image text-center">
                <img
                  className="rounded-circle"
                  src="img/fullservice.jpg"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>{" "}
              <div className="timeline-panel text-left">
                <div className="timeline-heading">
                  <h4> December 2012 </h4>{" "}
                  <h4 className="subheading"> Transition to Full Service </h4>{" "}
                </div>{" "}
                <div className="timeline-body">
                  <p className="text-muted">Description goes here</p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="timeline-image text-center">
                <img
                  className="rounded-circle"
                  src="img/fullservice.jpg"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>{" "}
              <div className="timeline-inverted text-left">
                <div className="timeline-panel text-right">
                  <div className="timeline-heading">
                    <h4> July 2014 </h4>{" "}
                    <h4 className="subheading"> Phase Two Expansion </h4>{" "}
                  </div>{" "}
                  <div className="timeline-body">
                    <p className="text-muted">Description goes here</p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {/* <li className="timeline-inverted"> */}
              <div className="timeline-image text-center">
                <h4> Be Part Of Our Story! </h4>{" "}
              </div>{" "}
              {/* </li>{" "} */}
              {/* </ul>{" "} */}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {this.props.noContact || <Contact />}
      </section>
    );
  }
}
export default About;
