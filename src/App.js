import './App.css';

import Nav from './Components/Nav/Nav';
import Routes from './config/Routes';
import Footer from './Components/Footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';
import {Callout, Colors} from 'react-foundation';

import React from 'react';


const App =()=> {
    return (
      <Router>
        <div className="App">
          <Callout color={Colors.SUCCESS}>
            <p>Now Open! Plan your visit <i className="fas fa-arrow-right" aria-hidden="true">&nbsp;</i></p>
          </Callout>
          <Nav />
          <Routes />
          <Footer />
      </div>
      </Router>
    );
  };

export default App;
