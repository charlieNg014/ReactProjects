import React, { Component } from "react";
import Title from "../Title";
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';
class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if(cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="Cart" />
                  <CartColumns />
                  <CartList 
                    value={value} />
                  <CartTotal value={value} history={this.props.history} />
                </React.Fragment>
              )
            } else {
              return(
                <React.Fragment>
                  <EmptyCart />
                </React.Fragment>
              )
            }
          }}
        </ProductConsumer>
       
      
      </section>
    );
  }
}
export default Cart;
