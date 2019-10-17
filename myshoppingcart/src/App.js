import React, {Component} from "react";
// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Modal from './components/Modal';

//Re-usable items
// import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Home from "./components/Home";
import Services from "./components/hcomponents/Common/Services";
import Portfolio from "./components/hcomponents/Common/Portfolio";
import About from "./components/hcomponents/Common/About";
import Team from "./components/hcomponents/Common/Team";
import Contact from "./components/hcomponents/Common/Contact";
import PageWrapper from "./components/hcomponents/PageWrapper";

class App extends Component {
  render() {
    return (
    <React.Fragment>
      
     {/* <Navbar /> */}
     <PageWrapper>
     </PageWrapper>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route path="/product" component = {ProductList} /> 
        <Route path="/details" component = {Details} />
        <Route path="/cart" component = {Cart} />
        <Route path="/services" component = {Services} />
        <Route path="/portfolio" component = {Portfolio} />
        <Route path="/about" component = {About} />
        <Route path="/team" component = {Team} />
        <Route path="/contact" component = {Contact} />
        {/* <Route component = {Default} /> */}
      </Switch>
      <Modal />
    </React.Fragment>
    );
  }
}

export default App;
