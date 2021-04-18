import React, { Component } from 'react';

import Btn from '../../components/Btn';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

class Page1 extends Component {

    constructor(props) {
        super(props);
        this.reverseBtn = this.reverseBtn.bind(this);
        this.state = {
            contentS: ''
        }
    }

    /* Functions */

    reverseBtn() {

        var p1_input = document.getElementById('sona').value;

        var p1_array = p1_input.split(' ').reverse();

        var p1_res = '';

        p1_array.forEach(function (palabra, i) {
            if (i != 0 || i != p1_array.length) p1_res += ' ';
            p1_res += palabra;
        });

        this.setState({
            contentS: p1_res
        })
    }

    /* Renderizado de elementos */

    render() {
        return <div style={pageStyle}>

            <h2 style={title} >Problema 1</h2>

            Dada una lista de palabras separadas por un espacio, invierte
            el orden de dichas palabras. Las palabras solo pueden estar
            separadas por un espacio.

            <Input iden='sona' type='text' place="Digite las palabras" />

            <div style={container}>
                <Btn realice={this.reverseBtn.bind(this)} text='Invertir orden' />
                <TextArea cont={this.state.contentS} ></TextArea>
            </div>

        </div>
    }

}

/* Styles */
const container = {
    display: 'grid',
    gridTemplateColumns: '40% 60%',
    alignItems: 'center'
}

const title = {
    fontSize: '35px'
}

const pageStyle = {
    margin: '64px',
    borderRadius: '4px',
    backgroundColor: 'rgb(60, 60, 60)',
    padding: '32px',
    fontSize: '25px'
}

export default Page1;