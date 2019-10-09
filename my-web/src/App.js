import React from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import each pages
import Home from "./components/Pages/Home";
import Portfolio from "./components/Common/Portfolio";
import Services from "./components/Common/Services";
import Timeline from "./components/Common/Timeline";
import Team from "./components/Common/Team";
import Contact from "./components/Pages/Contact";
import Client from "./components/Common/Client";

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
          {/* {display the team on the landing page} */}{" "}
          <Route path="/team" component={Team} /> {/* //display the contacr */}{" "}
          <Route path="/contact" component={Contact} />{" "}
        </PageWrapper>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
