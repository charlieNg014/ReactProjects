import React, {Component} from 'react';
// import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import "../css/style.css";
import xicon from '../css/xicon.png';


export default class Modal extends Component {
    render() {
        return(
           <ProductConsumer>
               {(value) => {
                   const {modalOpen, closeModal} = value;
                   const {img, title, price} = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    } else {
                       return (
                       <div className="modal-design">
                           <div  className="container">
                               <div className="row">
                                   <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                       <section className="first-line">
                                            <h5 className="text">Item Details
                                            <Link>
                                                <img 
                                                className="icon"
                                                src={xicon} 
                                                alt="out"
                                                style={{ width: "3rem", height: "3rem" }} 
                                                onClick =  {() => closeModal()}
                                                />
                                            </Link>
                                            </h5>
                                            
                                            
                                       </section>
                                       
                                        <img src ={img} className="img-fluid" alt ="product" style ={{width: '300px', height:'200px'}} />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price: ${price}</h5>

                                        {/* first link */}
                                        <Link to="/">
                                            <ButtonContainer className="left-button" onClick={() => closeModal()}>
                                                Store 
                                            </ButtonContainer>
                                        </Link>

                                        {/* second link */}
                                        <Link to="/cart">
                                            <ButtonContainer className="right-button" cart onClick={() => closeModal()}>
                                                Go To Cart 
                                            </ButtonContainer>
                                        </Link>
                                    </div> 
                               </div>
                           </div>
                       </div>
                       )
                    }
                   
               }}
           </ProductConsumer>
        )
    }
}

