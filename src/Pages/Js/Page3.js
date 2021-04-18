import React, { Component } from 'react';

import Btn from '../../components/Btn';
import TextArea from '../../components/TextArea';
import Input from '../../components/Input';

let palabra = '';
let contador = 0;

let diccionary = [];
let abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let letrasConcuerrentes = [];
let numeros = [];
let letrasUnicas = [];

class Page3 extends Component {

    constructor(props) {
        super(props)
        this.maxim = this.maxim.bind(this);
        this.confirm = this.confirm.bind(this);
        this.state = {
            count: 0
        }
    }

    confirm = (event) => {

        if (event.which === 32) { alert('No se acpetan espacios') };
        /* console.log(event.which) */
        if (event.which !== 13) {
            palabra += event.key
        }
        if (event.which == 44) {
            diccionary.push(palabra);
            palabra = '';
        }

    }

    maxim() {
        var result = document.getElementById('volumen').value;

        if (result.includes(' ')) {
            alert('Borre los espacios')
        } else {

            diccionary.forEach((word) => {

                abecedario.forEach((letra) => {


                    if (word.includes(letra)) {

                        letrasConcuerrentes.push(letra);

                    }

                    letrasConcuerrentes.forEach((elemento) => {
                        if (!letrasUnicas.includes(elemento)) {
                            letrasUnicas.push(elemento);
                        }
                    })
                    
                });

                /* console.log(letrasUnicas)

                contador = letrasUnicas.length;

                numeros.push(contador)

                console.log(contador)
                var condition = 0
                while (condition <= contador-1) {
                    condition +=1
                    console.log('si')
                    letrasUnicas.shift();
                }
                console.log(letrasUnicas)
                contador = 0

                console.log(numeros) */

            });



        }
    }

    render() {
        return <div style={pageStyle}>

            <h2 style={title} >Problema 3</h2>
            Dada una lista de palabras, encontrar la palabra que mas numero de
            caracteres unicos tenga.
            <br /> <br />
            <em>Ejemplo : CASA = 3(c, a, s)  PERRO = 4 (p, e, r, o)</em>
            <br /> <br />
            Considera solamente un alfabeto de la A - Z en mayusculas.
            Las palabras ingresadas deberan estar separadas por una coma
            <br />
            <em>
                Todas las palabras deberan cerrar en una coma
            </em>,<br /> no
            se aceptan espacios.

            <Input entry={this.confirm.bind(this)} iden='volumen' type='text' place='No se aceptan espacios' />

            <div style={container}>
                <Btn realice={this.maxim.bind(this)} text='Encontrar caracteres' />
                <TextArea />
            </div>



        </div>
    }

}

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

export default Page3;