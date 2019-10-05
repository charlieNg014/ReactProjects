import React, { Component } from 'react';
import HeaderItem from './HeaderItem';
import img from './assets/img/baking.jpeg';

const header = [{
    title : 'WHENEVER I BAKE. BAKE WITH MY HEART',
    subtitle : "LOVE WITH BAKING",
    buttonText : "CHECK OUT PRODUCT",
    link : "/portfolio",
    image: img
}];

class Header extends Component {
    render() {
        return ( 
            <div > 
            {header.map((item, index) => {
                return <HeaderItem {...item } key = { index } />
            })} 
            </div>
        )
    }
}

export default Header;