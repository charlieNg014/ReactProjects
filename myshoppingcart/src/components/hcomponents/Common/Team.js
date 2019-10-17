import React, { Component } from "react";
import SingleTeam from "./SingleTeam";
import "./landingPageStyle.css";

const teams = [
  { name: "Daniel Vo", role: "Baker" },
  { name: "Huyen Bui", role: "Inspirer" }
];

class Team extends Component {
  render() {
    return (
      <section class="bg-light page-section" id="team">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase"> Our Amazing Team </h2>{" "}
              <h3 class="section-subheading text-muted">
                {" "}
                People behind our successes{" "}
              </h3>{" "}
            </div>{" "}
          </div>{" "}
          <div class="row text-center">
            {" "}
            {teams.map((team, index) => {
              return <SingleTeam {...team} key={index} />;
            })}
          </div>{" "}
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted"> Description goes here </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    );
  }
}
export default Team;
