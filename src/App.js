import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Page1 from './Pages/Js/Page1';
import Page2 from './Pages/Js/Page2';
import Page3 from './Pages/Js/Page3';

import Menu from './components/Menu';


class App extends Component {

  render() {
    return <div>
      <Router>

        <title>HomePage</title>

        <Menu/>

        <Route exact path='/' render={() => {
          return <div>
            <Home />
          </div>
        }}>
        </Route>

        <Route exact path = '/page1' component = {Page1}/>

        <Route exact path = '/page2' component = {Page2}/>

        <Route exact path = '/page3' component = {Page3}/>

      </Router>
    </div>
  }

}

export default App;
