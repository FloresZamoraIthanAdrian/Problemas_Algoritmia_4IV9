import React, { Component } from 'react';

class Btn extends Component{

    constructor(props){
        super(props);
        /* this.print = this.print.bind(this); */
    }
/* 
    print(){
        console.log('ola')
    } */
    
    render(){
        return <button style = {btnSty} onClick = {this.props.realice}>{this.props.text}</button>
    }

}

const btnSty = {
    margin: '32px',
    padding: '22px',
    backgroundColor: '#444547', 
    border: 'none',
    borderBottom: 'yellow', 
    color: 'yellow', 
    cursor: 'pointer',
    fontSize: '22px',
    display: 'inline'
}

export default Btn;