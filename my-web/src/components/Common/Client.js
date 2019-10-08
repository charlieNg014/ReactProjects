import React, {Component} from 'react';
import ClientItem from './ClientItem';
// import '../css/style.css';
import img from './assets/img/review.jpg';

//create a single array to store all of the elements
const clientreview = [{
    name: 'Charlie Nguyen',
    description: 'A beautiful watermelon cake I have ever had',
    image: img,
    checked: 'checked'
}];

class Client extends Component {
    render() {
        return(
            //One code to display Client 
            <section className="review-area section-gap relative">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-9 pb-40 header-text text-center">
                                <h1 className="pb-10 text-white">Enjoy our Client’s Review</h1>
                                <p>
                                    Who are in extremely love with eco friendly system.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="active-review-carusel owl-carousel owl-theme owl-loaded">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage">
                                        
                                    {/* using map to take all of the elements from the array */}
                                    {clientreview.map((item, index) => {
                                        return <ClientItem {...item } key = { index } />
                                    })}
                                    </div>
                                </div>
                                <div className="owl-controls">
                                    <div className="owl-nav">
                                        <div className="owl-prev" >prev</div>
                                        <div className="owl-next" >next</div>
                                    </div>
                                    <div className="owl-dots">
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot active"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Client;