import React, { Component } from 'react';

import '../index.css'

export default class TextArea extends Component{

    constructor(props){
        super(props);
        /* this.state = {
            contentS: '123'
        } */
    }

    render(){
        return <div>
            <p style = {textSt}>{this.props.cont}</p>
        </div>
    }

}

const textSt = {
    border: 'none',
    borderBottom: '2px solid #b8b827',
    backgroundColor: '#444547',
    width: '90%', 
    padding: '19px', 
    color: 'yellow', 
    fontFamily: 'monospace', 
    fontSize: '20px', 
    height: '300px', 
    resize: 'none'
}