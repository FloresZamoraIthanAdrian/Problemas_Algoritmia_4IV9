import React, { Component } from 'react';

import '../index.css'

export default class Input extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <input id = {this.props.iden} onKeyPress = {this.props.entry} type = {this.props.type} className = 'input' placeholder = {this.props.place} ></input>
        </div>
    }

}
