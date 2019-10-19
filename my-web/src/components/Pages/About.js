import React, { Component } from "react";
// import Header from '../Common/Header';

class About extends Component {
  render() {
    return (
      <div>
        <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase"> Its me </h2>{" "}
                <h3 className="section-subheading text-muted">
                  {" "}
                  The beautiful story of my home - based bakery{" "}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/1.jpg"
                        alt=""
                      />
                    </div>{" "}
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4> 2015 - 2016 </h4>{" "}
                        <h4 className="subheading"> Our Humble Beginnings </h4>{" "}
                      </div>{" "}
                      <div className="timeline-body">
                        <p className="text-muted">
                          {" "}
                          My passion in baking gew up gradually day - by - day
                          when I am watching the baker have made a beautiful
                          cake!{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </li>{" "}
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/2.jpg"
                        alt=""
                      />
                    </div>{" "}
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4> March 2016 </h4>{" "}
                        <h4 className="subheading"> An Agency is Born </h4>{" "}
                      </div>{" "}
                      <div className="timeline-body">
                        <p className="text-muted">
                          {" "}
                          Mom is the biggest fan of mine and she is also my
                          "baking agent" when she introduces my baking products
                          to all of her friends at work.And my very first order
                          came from her close friend when she ordered a cheese
                          cake for her son 's birthday !{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </li>{" "}
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/3.jpg"
                        alt=""
                      />
                    </div>{" "}
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4> December 2017 </h4>{" "}
                        <h4 className="subheading">
                          {" "}
                          Transition to Full Service{" "}
                        </h4>{" "}
                      </div>{" "}
                      <div className="timeline-body">
                        <p className="text-muted">
                          {" "}
                          I am started using facebook and phone number for
                          baking order.Lots of my friends order cake with me in
                          class, family 's friend also did it too. Whenever I
                          have free time in the school break, I dedicated to try
                          a new baking techniques because this job requires lots
                          of hands - on, otherwise yo will be outdated!
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </li>{" "}
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/4.jpg"
                        alt=""
                      />
                    </div>{" "}
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4> January 2019 </h4>{" "}
                        <h4 className="subheading"> Phase Two Expansion </h4>{" "}
                      </div>{" "}
                      <div className="timeline-body">
                        <p className="text-muted">
                          {" "}
                          Charlie, a friend of our family has developed a
                          website to help me in managing the order, introduce my
                          products to the world.This website is also a Christmas
                          gift from him.He gives it to me as he expects that it
                          will help me to keep passion on baking or at least,
                          have a hobby in a diffifult life ahead!{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </li>{" "}
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>
                        {" "}
                        Be Part <br /> Of Our <br /> Story!{" "}
                      </h4>{" "}
                    </div>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    );
  }
}

export default About;
