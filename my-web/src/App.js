import React from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

//import each pages
import Home from "./components/Pages/Home";
import Portfolio from "./components/Common/Portfolio";
import Services from "./components/Common/Services";
import Timeline from "./components/Common/Timeline";
import Team from "./components/Common/Team";
import Contact from "./components/Pages/Contact";
import ShoppingCart from "./ShoppingCart";
import Modal from "./components/Common/Modal";
import MyCart from "./components/Common/MyCart";


function App() {
  return (
    <div>
      <Router>
        <PageWrapper>
          <Route exact={true} path="/" component={Home} />{" "}
          {/* {display the service on the landing page} */}{" "}
          <Route exact={true} path="/services" component={Services} />{" "}
          {/* {display the product on the page} */}{" "}
          <Route path="/portfolio" component={Portfolio} />{" "}
          {/* {display the about on the landing page} */}{" "}
          <Route path="/timeline" component={Timeline} />{" "}
          {/* {display the about on the landing page} */}{" "}
          <Route exact path="/shoppingcart" component={ShoppingCart} />{" "}
          {/* {display the team on the landing page} */}{" "}
          <Route path="/team" component={Team} /> {/* //display the contacr */}{" "}
          <Route path="/contact" component={Contact} />{" "}
          <Route path="/modal" component={Modal} />
          <Route path="/mycart" component={MyCart} />
        </PageWrapper>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
