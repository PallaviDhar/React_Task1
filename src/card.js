/*import React,{Component} from "react";

class Card extends Component{
    render() {
        return(
            <div className="card mt-5">
                <img className="card-img-top" src={this.props.picture} alt="Card image cap"></img>
                <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <h4 className="card-title">{this.props.price}</h4>
                </div>
            </div>
        );
    }
}

export default Card;*/


import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div class="card">
                <img src={this.props.pic} class="card-img-top" alt="Product pic"></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">Rs: <span>{this.props.price}</span></p>
                </div>
            </div>
        );
    }
}

export default Card;