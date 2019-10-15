import React from "react";

export default function CartItem({item, value}) {
     const {id, title, img, price, total, count} = item;
     const {increment, decrement, removeItem} = value; 
    return (
       
    
        <div>
            <div className="row text-capitalize text-center">
                {/* image */}
                {/* <div className="col-10 mx-auto col-lg-2"> */}
                    <img src = {img} style={{width: '5rem', height: '5rem'}}
                    className="cartitem c-img-fluid" alt="product" />
                {/* </div> */}

                {/* text  */}
                {/* <div className="col-10 mx-auto col-lg-2"> */}
                    <div className="cartitem c-title">{title}</div>
                    
                {/* </div> */}
                
                {/* price  */}
                {/* <div className="col-10 mx-auto col-lg-2"> */}
                <span className="cartitem c-price">${price}</span>
                
                {/* </div> */}

                {/* Quantity */}
                {/* <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0"> */}
                    <div className="cartitem c-quantity d-flex justify-context-center">
                        <div>
                            <button className="btn btn-black mx-1 q-btn" onClick = {() => decrement(id)}>
                                -
                            </button>
                            <button className="btn btn-black mx-1" onClick>{count}</button>
                            <button className="btn btn-black mx-1 q-btn" onClick  = {() => increment(id)}>
                                +
                            </button>
                        </div>
                    </div>
                {/* </div> */}

                {/* Remove */}
                {/* <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0"> */}
                    <div className="cartitem c-icon" onClick = {() => removeItem(id)}>
                        <i className = "fas fa-trash"></i>
                    </div>
                {/* </div> */}

                {/* Total  */}
                {/* <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0"> */}
                
                    <strong className="cartitem c-total">
                            ${total} 
                    </strong>
             
                    
                {/* </div> */}
            </div>
        </div>
    )
}