import React, { Component } from "react";
// import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
import '../css/style.css';


class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-4 col-lg-4 my-3">
        <div className="card">
          <ProductConsumer>
          {value => ( 
          <div className="img-container p-5" 
            onClick={() => 
              value.handleDetail(id)
            }>

              {/* display the image on the screen */}
              <Link to="/details" >
                <img src ={img} style={{width: '8rem', height: '7rem'}} alt="product" className="card-img-top" />
              </Link>

              {/* button here */}
              <button className="cart-btn" 
              disabled={inCart ? true: false} 
              onClick={() => {
                value.addToCart(id);
                value.openModal(id);
                // alert("Added to the cart already");
              }} 
              >
                
              {inCart?(
              <p className="text-capitalized mb-0" disabled onClick={() => value.openModal(id)}>
                In Cart
              </p>
              ): (
              <i className="fas fa-cart-plus" />
              )}
              </button>
            </div>)}

           
          </ProductConsumer>

          {/* cart footer */}
          <div className="cart-footer d-flex justify-content-between">
            {/* Name of products */}
            <p className="cart-text align-self-center mb-0">
              {title}
            </p>

            {/* price */}
            <h5 className="cart-price text-blue font-italic mb-0">
              <span className="mr-1">
                ${price}
              </span>
            </h5>
          </div>
        </div>
        </div>
    );
  }
}
// set the type of variables to default no matter any bugs 
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

export default Product;
