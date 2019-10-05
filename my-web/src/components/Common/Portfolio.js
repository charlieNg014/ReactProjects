import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import img1 from './assets/img/01-thumbnail.jpg';
import img2 from './assets/img/02-thumbnail.jpg';
import img3 from './assets/img/03-thumbnail.jpg';
import img4 from './assets/img/04-thumbnail.jpg';
import img5 from './assets/img/05-thumbnail.jpg';
import img6 from './assets/img/06-thumbnail.jpg';

const porfolio = [{
        title: 'Cheese Cake',
        subtitle: 'A perfect cake for picnic or family',
        image: img1
    },

    {
        title: 'Macarons',
        subtitle: 'Tiny but beautiful',
        image: img2
    },

    {
        title: 'Red Velvet',
        subtitle: 'Enjoy the velvet',
        image: img3
    },

    {
        title: 'Mousse Cake',
        subtitle: 'Strawberry with mousse',
        image: img4
    },

    {
        title: 'Watermelon Cake',
        subtitle: 'A perfect combination of watermelon and cake',
        image: img5
    },

    {
        title: 'Buscuit Cake',
        subtitle: 'A bees-kwee',
        image: img6
    }

]

class Portfolio extends Component {
    render() {
        return ( <
            section className = "bg-light page-section"
            id = "portfolio" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-lg-12 text-center" >
            <
            h2 className = "section-heading text-uppercase" > Portfolio < /h2> <
            h3 className = "section-subheading text-muted" > My lovely cakes are displayed below < /h3> <
            /div> <
            /div> <
            div className = "row" > {
                porfolio.map((item, index) => {
                    return <PortfolioItem {...item }
                    key = { index }
                    />
                })
            } <
            /div> <
            /div> <
            /section>
        )
    }
}

export default Portfolio;