import React, {Component} from 'react';
import img1 from './assets/img/baking.jpeg';
import img2 from './assets/img/agent.jpg';
import img3 from './assets/img/fullservice.jpg';
import img4 from './assets/img/bakingcareer.jpg';


class Timeline extends Component {
    render() {
        return(
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
                            <p className="text-muted">My passion about baking started since I watched a random video on youtube "How to make a cheese cake"!</p>
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
                            <p className="text-muted">Mom is just a biggest fan of mine, an inspirer to encourage me keep nurturing my passion whenever I am down. She is also my agent because of of my cake order came from her friends and colleagues!</p>
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
                            <p className="text-muted">I have received all of my orders from my mom or just text from school's friend but now I think I need another way, an universal way to promote my home-based bakery!</p>
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
                            <p className="text-muted">This website is a gift from Charlie, a friend of our family. He gave me this because he wants me to at least keeep the passion on baking, which makes me happy every single time I bake in the busy life!</p>
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
        )
    }
}

export default Timeline;
