import React, { Component } from "react";
import "./landingPageStyle.css";

class Footer extends Component {
  render() {
    return (
      <footer class="footer text-center">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4">
              <span class="copyright">
                {" "}
                Copyright by Charlie Nguyen{" "}
              </span>{" "}
            </div>{" "}
            <div class="col-md-4">
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="/">
                    <i class="fab fa-twitter"> </i>{" "}
                  </a>{" "}
                </li>{" "}
                <li class="list-inline-item">
                  <a href="/">
                    <i class="fab fa-facebook-f"> </i>{" "}
                  </a>{" "}
                </li>{" "}
                <li class="list-inline-item">
                  <a href="/">
                    <i class="fab fa-linkedin-in"> </i>{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div class="col-md-4">
              <ul class="list-inline quicklinks">
                <li class="list-inline-item">
                  <a href="/"> Privacy Policy </a>{" "}
                </li>{" "}
                <li class="list-inline-item">
                  <a href="/"> Terms of Use </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </footer>
    );
  }
}
export default Footer;
