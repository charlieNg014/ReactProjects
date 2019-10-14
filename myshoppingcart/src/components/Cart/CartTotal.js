import React from 'react';
import {Link} from 'react-router-dom';
import PaypalButton from './PaypalButton';

export default function CartTotal({value, history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment> 
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/cart">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick= {() => clearCart()}>
                                Clear Cart
                            </button>
                        </Link>

                        {/* Subtotal  */}
                        <h5>
                            <span className="span text-title">
                                Subtotal: 
                            </span>
                            <strong>
                                ${cartSubTotal}
                            </strong>
                        </h5>

                        {/* Tax  */}
                        <h5>
                            <span className="span text-title">
                                Tax: 
                            </span>
                            <strong>
                                ${cartTax}
                            </strong>
                        </h5>

                        {/* Total  */}
                        <h5>
                            <span className="span text-title">
                                Total: 
                            </span>
                            <strong>
                                ${cartTotal}
                            </strong>
                        </h5>

                        {/* PayPal  */}
                        <PaypalButton 
                        total={cartTotal} 
                        clearCart={clearCart}
                        history={history}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}