import React, {Component} from 'react';
import "../css/shoppingcartStyle.css";


class MyCart extends Component {
    render() {
        return(
            <section className="bg-light page-section" id="mycart">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center full-width">
                  <h2 className="section-heading text-uppercase">Your Cart</h2>
                  <div className="col-10 col-lg-2 d-flex cart-col">
                      <p className="text-uppercase cart-col-text">
                          Products
                      </p>
                      <p className="text-uppercase cart-col-text">
                          Name
                      </p>
                      <p className="text-uppercase cart-col-text">
                          Price
                      </p><p className="text-uppercase cart-col-text">
                          Quantity
                      </p>
                      <p className="text-uppercase cart-col-text">
                          Remove
                      </p>
                      <p className="text-uppercase cart-col-text">
                          Total
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default MyCart;