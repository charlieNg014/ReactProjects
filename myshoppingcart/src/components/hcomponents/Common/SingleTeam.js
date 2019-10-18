import React, { Component } from "react";
import "./landingPageStyle.css";

class SingleTeam extends Component {
  render() {
    return (
      <div className="col-sm-6 text-lg-center">
        <div className="team-member">
          <img
            className="mx-auto rounded-circle"
            style={{ width: "120px", height: "120px;" }}
            src={this.props.image}
            alt=""
          />
          <h4> {this.props.name} </h4>{" "}
          <p className="text-muted"> {this.props.role} </p>{" "}
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="/">
                <i className="fab fa-twitter"> </i>{" "}
              </a>{" "}
            </li>{" "}
            <li className="list-inline-item">
              <a  href="/">
                <i className="fab fa-circle fa-facebook-f"> </i>{" "}
              </a>{" "}
            </li>{" "}
            <li className="list-inline-item">
              <a  href="/">
                <i className="fab fa-circle fa-linkedin-in"> </i>{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default SingleTeam;
