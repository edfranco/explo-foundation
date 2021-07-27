import React, {Component} from 'react';
import banner from '../../images/foundation-banner.jpg';

import './HomeBanner.css';

class HomeBanner extends Component{
    render(){
        return(
            <div className="home-banner-container">
                <img className="home-banner" alt="" src={banner}/>
                <div className="banner-overlay">
                    <strong>Welcome</strong>
                    <p>Welcome to Eduardo's Exploratorium React Website</p>
                </div>
            </div>
        )
    }
}

export default HomeBanner;
