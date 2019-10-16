import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../css/style.css";
import { ButtonContainer } from "./Button";
// import {homelogo} from "../images/agent.jpg";

class Home extends Component {
  render() {
    return (
        <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Bakery Store!</div>
            <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
            <div className="center-button"> 
            <Link to="/product" >
              <ButtonContainer className="btn text-uppercase " href="/product">
                SHOP NOW
              </ButtonContainer> 
            </Link>
            </div>
            
            
           
            
          </div>
        </div>
     
      </header>
    );
  }
}

export default Home;
