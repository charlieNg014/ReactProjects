import React, { Component } from 'react';
// import { link } from 'react-router-dom';
class HeaderItem extends Component {
    render() {
        return ( 
        <header className = "masthead"
            style = {{ backgroundImage: 'url("' + this.props.image + '")' }} >
            < div className = "container" >
                <div className = "intro-text" >
                <div className = "intro-lead-in" > { this.props.title } < /div> 
                <div className = "intro-heading text-uppercase" > { this.props.subtitle } 
            </div> 
            <a className = "btn btn-primary btn-xl text-uppercase js-scroll-trigger" href = { this.props.link } > { this.props.buttonText } </a>
            </div> 
            </div > 
        </header>
)
}
}

export default HeaderItem;