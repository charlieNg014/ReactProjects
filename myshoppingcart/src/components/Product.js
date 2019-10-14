import React, { Component } from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';



//variables
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    background: rgba(247, 247, 247);
  }
  .cart-footer {
    background: rgba(247, 247, 247);
    border-top: transparent;
    transition: all 1s linear;
    }
  &:hover {
    .card{
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
    }
   .cart-footer {
      background: rgba(247, 247, 247);
   }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    margin-left: -5px;
  }
  // zoom out in image
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container: hover .card-img-top{
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1rem;
    border-radius: 0.5 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container: hover .cart-btn {
    transform: translate(0,0);
    transition: all 1s linear;
  }
  .cart-tbn: hover {
    corlor: var(--mainBlue);
    cursor: pointer;
  }
  .cart-text {
    margin-left: 10px;
  }
  .cart-price {
    margin-right: 5px;
  }
` 

class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-4 col-lg-4 my-3">
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
              <p className="text-capitalized mb-0" disabled>
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
      </ProductWrapper>
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