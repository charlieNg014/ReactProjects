import React, { Component } from 'react';
// import HeaderItem from './HeaderItem';
import { Link } from 'react-router-dom';
import '../css/style.css';




class Header extends Component {
    render() {
        return ( 
            <header className = "masthead" style = {{ backgroundImage: 'url("' + this.props.image + '")' } } >
                <div className = "container" >
                <div className = "intro-text" >
                <div className = "intro-lead-in" > { this.props.title } < /div>  
                <div className = "intro-heading subtitle text-uppercase" > { this.props.subtitle } </div>  
                {this.props.showButton &&
                    <Link className = "btn btn-primary btn-xl text-uppercase js-scroll-trigger" to = { this.props.link }>{ this.props.buttonText }</Link>
                }

                </div>  
                </div >  
            </header>
        )
    }
}

export default Header;