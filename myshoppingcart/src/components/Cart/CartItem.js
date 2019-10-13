import React from "react";

export default function CartItem({item, value}) {
     const {id, title, img, price, total, count} = item;
     const {increment, decrement, removeItem} = value; 
    return (
       
    
        <div>
            <div className="row my-2 text-capitalize text-center">
                {/* image */}
                <div className="col-10 mx-auto col-lg-2">
                    <img src = {img} style={{width: '5rem', height: '5rem'}}
                    className="img-fluid" alt="product" />
                </div>

                {/* text  */}
                <div className="col-10 mx-auto col-lg-2">
                    <span classNamed-lg-none></span>
                    {title}
                </div>
                
                {/* price  */}
                <div className="col-10 mx-auto col-lg-2">
                <span classNamed-lg-none>$ </span>
                {price}
                </div>

                {/* Quantity */}
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-context-center">
                        <div>
                            <button className="btn btn-black mx-1" onClick = {() => decrement(id)}>
                                -
                            </button>
                            <button className="btn btn-black mx-1" onClick>{count}</button>
                            <button className="btn btn-black mx-1" onClick  = {() => increment(id)}>
                                +
                            </button>
                        </div>
                    </div>
                </div>

                {/* Remove */}
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="cart-icon" onClick = {() => removeItem(id)}>
                        <i className = "fas fa-trash"></i>
                    </div>
                </div>

                {/* Total  */}
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <strong>
                        Item Total: $  
                    </strong>
                </div>
            </div>
        </div>
    )
}