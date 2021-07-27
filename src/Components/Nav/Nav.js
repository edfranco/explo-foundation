import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../explo-logo-white.svg';
import {Menu, MenuItem} from 'react-foundation';

import './Nav.css';

const Nav = () => {
    return(
        <div className="nav">
          <a href="/"><img className="explo-logo" alt="Exploratorium" src={logo} height="5px"/></a>
          <Menu>
            <Link to="/visit"><MenuItem>Visit</MenuItem></Link>
            <Link to="/education"><MenuItem>Education</MenuItem></Link>
            <Link to="/explore"><MenuItem>Explore</MenuItem></Link>
            <Link to="/about"><MenuItem>About Us</MenuItem></Link>
            <Link to="/join"><MenuItem>Join + Support</MenuItem></Link>
            <Link to="/store"><MenuItem>Store</MenuItem></Link>
          </Menu>
          <div className="search-container">
            <div className="search"></div>
            <img alt="" src="https://www.exploratorium.edu/sites/default/files/site/baseline_search_white_18dp.png" height="10" />
          </div>
         </div>
    );
};

export default Nav;
