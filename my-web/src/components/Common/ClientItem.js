import React, {Component} from 'react';
// import '../css/style.css';

class ClientItem extends Component {
    render() {
        return (
            <div class="owl-item">
                <div class="single-review item">
                    <img src= {this.props.image} alt="" />
                    <div class="title justify-content-start d-flex">
                        <a href="#">
                            <h4>{this.props.name}</h4>
                        </a>
                        <div class="star">
                            <span class={`fa fa-star ${this.props.checked}`}></span>
                            
                        </div>
                    </div>
                    <p>
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default ClientItem;