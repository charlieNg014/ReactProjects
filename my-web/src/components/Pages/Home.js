import React, { Component } from 'react';

//Re-usable components
import Header from '../Common/Header';
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';
import Contact from '../Pages/Contact';
import Footer from '../Pages/Footer';
// import Client from '../Common/Client';

class Home extends Component {
    render() {
        return ( 
            <div >
                <Header 
                title = 'WHENEVER I BAKE. BAKE WITH MY HEART'
                subtitle = "LOVE WITH BAKING"
                buttonText = "CHECK OUT PRODUCT"
                link = "/services"
                showButton =''
                // image = ''
                />

                <Services />
                <Portfolio />
                <Timeline />
                <Team />
                {/* <Client /> */}
                <Contact />
                <Footer />
           
            </div>

            
            
        )
    }
}

export default Home;