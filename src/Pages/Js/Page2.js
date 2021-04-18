import React, { Component } from 'react';

import Input from '../../components/Input';
import Btn from '../../components/Btn';
import TextArea from '../../components/TextArea';

class Page2 extends Component {

    constructor(props) {
        super(props)
        this.search = this.search.bind(this);
        this.state = {
            value: ''
        }
    }

    search() {
        var p2_x1 = document.getElementById('p2-x1').value;
        var p2_x2 = document.getElementById('p2-x2').value;
        var p2_x3 = document.getElementById('p2-x3').value;
        var p2_x4 = document.getElementById('p2-x4').value;
        var p2_x5 = document.getElementById('p2-x5').value;
        var p2_y1 = document.getElementById('p2-y1').value;
        var p2_y2 = document.getElementById('p2-y2').value;
        var p2_y3 = document.getElementById('p2-y3').value;
        var p2_y4 = document.getElementById('p2-y4').value;
        var p2_y5 = document.getElementById('p2-y5').value;

        var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
        var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];
        console.log(v1)
        console.log(v2)

        v1 = v1.sort(function (a, b) {
            return b - a;
        });

        v2 = v2.sort(function (a, b) {
            return b - a;
        });

        v2 = v2.reverse();

        var p2_producto = 0;

        for (var i = 0; i < v1.length; i++) {
            p2_producto += v1[i] * v2[i];
        }

        this.setState({
            value: `Producto escalar minimo: ${p2_producto}`
        })

        /* document.querySelector('#p2-output').textContent = 'Producto escalar minimo :' + p2_producto; */
    }

    render() {
        return <div style={pageStyle}>

            <h2 style={title} >Problema 2</h2>

            Dados 2 vectores <br /> <br />
            <em>v1 = (x1, x2, x3, ... xN) v2 = (y1, y2, y3, ... yN)</em> <br /> <br />
            y teniendo permitido permutar el orden de los elementos de dicho vector, encontrar
            el minimo producto escalar entre ambos vectores.
            <br />
            (El producto escalar se forma de la siguiente manera: <br /> <br />
            <em>x1*y1 + x2*y2 + x3*y3 + ... + xN*yN)</em>

            <div style={grid}>

                <div>
                    <Input iden = '#p2-x1' type='number' place='Digite el numero' />
                    <Input iden = '#p2-x3' type='number' place='Digite el numero' />
                    <Input iden = '#p2-x3' type='number' place='Digite el numero' />
                    <Input iden = '#p2-x4' type='number' place='Digite el numero' />
                    <Input iden = '#p2-x5' type='number' place='Digite el numero' />
                </div>

                <div>
                    <Input iden = '#p2-y1' type='number' place='Digite el numero' />
                    <Input iden = '#p2-y3' type='number' place='Digite el numero' />
                    <Input iden = '#p2-y3' type='number' place='Digite el numero' />
                    <Input iden = '#p2-y4' type='number' place='Digite el numero' />
                    <Input iden = '#p2-y5' type='number' place='Digite el numero' />
                </div>

            </div>

            <div style={container}>
                <Btn realice = {this.search.bind(this)} text='Calcular producto escalar' />
                <TextArea cont = {this.state.value}/>
            </div>

        </div>
    }

}

const grid = {
    display: 'grid',
    gridTemplateColumns: '50% 50%'
}

const container = {
    display: 'grid',
    gridTemplateColumns: '40% 60%'
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

export default Page2;