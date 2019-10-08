import React, {Component} from 'react';

//Re-usable items
import Footer from '../Pages/Footer';
import Contact from '../Pages/Contact';
import Header from '../Common/Header';


//images
import image from './assets/img/baking.jpeg';
import img1 from './assets/img/baking.jpeg';
import img2 from './assets/img/agent.jpg';
import img3 from './assets/img/fullservice.jpg';
import img4 from './assets/img/bakingcareer.jpg';


class Timeline extends Component {
    render() {
        return(
            <div>
                {this.props.noHeader || <Header
                // Add any props you want to modify the header 
                // title = 'WHENEVER I BAKE. BAKE WITH MY HEART'
                subtitle = "The Story behind"
                buttonText = "Check our services"
                link = '/services'
                showButton = { true }
                image = { image }
                />}

                <section className="page-section" id="about">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Our lovely story.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <ul className="timeline">
                            <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>2016-2017</h4>
                                <h4 className="subheading">My Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body">
                                <p className="text-muted">First part of your story goes here</p>
                                </div>
                            </div>
                            </li>
                            <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>March 2018</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                                </div>
                                <div className="timeline-body">
                                <p className="text-muted">Second part of your story goes here!</p>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>2019</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                                </div>
                                <div className="timeline-body">
                                <p className="text-muted">Third part of your story goes here!</p>
                                </div>
                            </div>
                            </li>
                            <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>September 2019</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                                </div>
                                <div className="timeline-body">
                                <p className="text-muted">Fourth part of your story goes here!</p>
                                </div>
                            </div>
                            </li>
                            <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>Be Part
                                Of Our
                                Story!</h4>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </section>

                {this.props.noContact || <Contact />}
                {this.props.noFooter || <Footer />}
            </div>
        )
    }
}

export default Timeline;
