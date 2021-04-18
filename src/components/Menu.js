import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../index.css'

class Menu extends Component {

    render() {
        return <div style={nav}>

            <Link className = 'nav' to='/Page1'>Problema 1</Link>
            <Link className = 'nav' to='/Page2'>Problema 2</Link>
            <Link className = 'nav' to='/Page3'>Problema 3</Link>

        </div>
    }

}

const nav = {
    backgroundColor: 'rgb(60, 60, 60)',
    fontSize: '25px',
    padding: '20px',
}

export default Menu;
