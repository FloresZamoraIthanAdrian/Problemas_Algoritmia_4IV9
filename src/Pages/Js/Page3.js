import React, { Component } from 'react';

import Btn from '../../components/Btn';
import TextArea from '../../components/TextArea';
import Input from '../../components/Input';

class Page3 extends Component {

    constructor(props) {
        super(props)
        this.maxim = this.maxim.bind(this);
        this.confirm = this.confirm.bind(this);
        this.state = {
            contentS: ''
        }
    }

    confirm = (event) => {

        if (event.which === 32) { alert('No se acpetan espacios') };

    }

    maxim() {
        
        let abc = [];
        var avance = true;

        var result = document.getElementById('volumen').value;

        if (result.includes(' ')) {

            alert('Borre los espacios')
            avance = false;

        }else{avance = true}

        if(result.charAt(result.length - 1) == ',' && avance == true){

            var diccionary = result.split(',');
            console.log(diccionary)
            
            let palabra = '';
            let letra = '';
            
            diccionary.forEach((element) => {
              
                palabra = '';
              
                for(var i = 0; i <= element.length - 1; i++){
                    letra = element.charAt(i)
                    if(palabra.includes(letra) == false){
                        palabra += letra
                    }
                    if(i == 50){break}
                }
              
                abc.push(palabra.length)
            });
            
            var mayor = Math.max(...abc);
            var posiscionPalabra = abc.indexOf(mayor);

            this.setState({
                contentS: `La palabra con mas caracteres unicos es: ${diccionary[posiscionPalabra]}`
            }) 

        }else{alert('Tiene que terminar en coma')}

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
                <TextArea cont = {this.state.contentS} />
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