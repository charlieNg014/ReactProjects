import React, {Component} from "react";
// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Modal from './components/Modal';

//Re-usable items
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import About from './components/hcomponents/About';
import Home from "./components/Home";


class App extends Component {
  render() {
    return (
    <React.Fragment>
     <Navbar />
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route path="/product" component = {ProductList} /> 
        <Route path="/details" component = {Details} />
        <Route path="/cart" component = {Cart} />
        <Route path="/about" component ={About} />
        {/* <Route component = {Default} /> */}
      </Switch>
      {/* <About /> */}
      <Modal />
      
    </React.Fragment>
    );
  }
}

export default App;
