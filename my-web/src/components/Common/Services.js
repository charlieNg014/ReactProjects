import React, { Component } from 'react';
import SingleService from './SingleService';

//Re-usable items
import Footer from '../Pages/Footer';
import Contact from '../Pages/Contact';
const services = [{
        title: 'Birthday',
        description: 'A cake for small birthday party for your kids or just friends',
        icon: 'fa-shopping-cart'
    },

    {
        title: 'Family outing',
        description: 'A perfect cake for any family picnic over the weekend or school break',
        icon: 'fa-laptop'
    },

    {
        title: 'Daily basis',
        description: 'Enjoy a cupcake or just a dozen of macarons ',
        icon: 'fa-lock'
    }
];

class Services extends Component {
    render() {
        return ( 
            
                <section className = "page-section" id="services" >
                    <div className = "container" >
                    <div className = "row" >
                    <div className = "col-lg-12 text-center" >
                        <h2 className = "section-heading text-uppercase" > Services < /h2> 
                        <h3 className = "section-subheading text-muted" > Enjoy our lovely cakes! < /h3> 
                    </div > 
                    </div> 
                    <div className = "row text-center" > {
                        services.map((service, index) => {
                            return <SingleService {...service }
                            key = { index }
                            />
                        })
                    }
                    </div> 
                    </div > 
                    {/* <Contact />
                    <Footer /> */}
                </section>
          

            
        )
    }
}

export default Services;