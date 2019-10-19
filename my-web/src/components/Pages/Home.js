import React, { Component } from 'react';

//Re-usable components
import Header from '../Common/Header';
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';
import Contact from '../Pages/Contact';
import Footer from '../Pages/Footer';
import img from '../Common/assets/img/bakingcareer.jpg';


class Home extends Component {
    render() {
        return ( 
            <div>
                <Header
                // Add any props you want to modify the header 
                // title = 'WHENEVER I BAKE. BAKE WITH MY HEART'
                subtitle = "LOVE WITH BAKING"
                buttonText = "SHOP NOW"
                link = '/shoppingcart'
                showButton = { true }
                image = { img }
                />
                <Services  noHeader noContact noFooter/>
                <Portfolio noHeader noContact noFooter/>
                <Timeline  noHeader noContact noFooter/>
                <Team noHeader noContact noFooter/>  
                <Contact noHeader noFooter/>
                <Footer />
            </div>

            



        )
    }
}

export default Home;