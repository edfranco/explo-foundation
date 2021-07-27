import React, {Component} from 'react';
import {Colors} from 'react-foundation';
import HomeBanner from '../HomeBanner/HomeBanner';

import banner from '../../images/foundation-banner.jpg';
import './HomePage.css';

class HomePage extends Component{
    render(){
        return(
            <div className="home-page">
                <HomeBanner />
                <div className="content">
                    <div className="grid-2">
                        <div className="left-grid">
                            <h2>Experience the Exploratorium at Pier 15</h2>
                            <strong color={Colors.ALERT}>Today's hours are 10:00 a.m.–5:00 p.m.</strong><br />
                            <strong style={{textDecoration:"underline"}}>Museum Hours*</strong><br />
                            <strong>Wednesday–Saturday: 10:00 a.m.–5:00 p.m.</strong><br />
                            <strong>Thursday (Ages 18+): 6:00–10:00 p.m.</strong><br />
                            <strong>Sunday (Daytime Members/Donors Only): 10:00 a.m.–Noon</strong><br />
                            <strong>Sunday: Noon–5:00 p.m.</strong><br />
                            <strong>Monday and Tuesday: Closed</strong><br />
                            <strong>*Except select days</strong><br />
                        </div>
                        <div className="right-grid">
                            <div className="pod">
                                <img className="pod-img" alt="" src={banner}/>
                                <a href="/documentation">Foundation</a>
                                <p>Check out the documentation page for Explo w/ Foundation</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default HomePage;
