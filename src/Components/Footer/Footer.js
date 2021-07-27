import React from 'react';
import {Button} from 'react-foundation';

import './Footer.css';

const Footer =()=> {
    return(
        <div className="footer">
            <div className="left-grid">
              <img className="footer-logo" src="https://www.exploratorium.edu/sites/default/files/site/explo-white.png" alt=""/>
              <div className="left-links-container">
                <div className="address">
                <p>
                        Pier 15<br />
                        (Embarcadero at Green Street)<br />
                        San Francisco, CA 94111<br/>
                        <a href="tel:+4155284444">415.528.4444</a>
                </p>
                <p style={{marginTop:"0.5em",marginBottom:"1rem"}}><a href="/about/contact-us">Contact Us</a></p>
                </div>
                <ul class="footer-menu"><li class="first leaf">
                    <a href="/visit" title="">Plan Your Visit</a></li>
                    <li class="collapsed"><a href="/visit/calendar" title="">Calendar</a></li>
                    <li class="leaf"><a href="https://transact.exploratorium.edu/ticketing/ticketing.aspx" title="">Reserve Tickets</a></li>
                    <li class="leaf"><a href="/visit/location-directions" title="">Getting Here</a></li>
                    <li class="leaf"><a href="/visit/store" title="">Store</a></li>
                    <li class="last leaf"><a href="/visit/rentals" title="">Event Rentals</a></li>
                </ul>
                <ul class="footer-menu"><li class="first leaf"><a href="/about-us" title="">About Us</a></li>
                    <li class="leaf"><a href="/membership" title="">Become a Member</a></li>
                    <li class="leaf"><a href="/support/donate-today" title="">Donate</a></li>
                    <li class="leaf"><a href="/about/jobs" title="">Jobs</a></li>
                    <li class="leaf"><a href="/support/volunteer" title="">Volunteer</a></li>
                    <li class="last leaf"><a href="/press-office" title="">Press Office</a></li>
                </ul>
              </div>
            </div>
            <div className="right-grid">
              <div className="footer-links">
                <div className="grid-33 grid-parent">
                    <Button>Visit</Button>
                </div>
                <div className="grid-33 grid-parent">
                    <Button>Join</Button>
                </div>
                <div className="grid-33 grid-parent">
                    <Button>Give</Button>
                </div>
              </div>
              <div className="footer-email-block">
                <p><a href="/about/newsletters">Get at-home activities and learning tools delivered straight to your inbox</a></p>
                <form>
                    <input type="textbox"/>
                </form>
                <p class="small"> The Exploratorium is a 501(c)(3) nonprofit organization. Our tax ID #: 94-1696494<br />
                <a href="/about/use-policy">© 2021 Exploratorium</a> | 
                <a href="/about/use-policy">Terms of Service</a> | 
                <a href="/about/privacy-policy">Privacy Policy</a> | 
                <a href="/about/privacy-policy#california">Your California Privacy Rights</a> | 
                <span id="teconsent" style={{display:"inline-block"}} aria-label="Open Cookie Preferences Modal" consent="undefined" role="complementary">
                    <script src="https://consent.trustarc.com/asset/notice.js/v/v1.7-8834" async="async" crossorigin=""></script>
                    <a role="link" id="icon-id06220164648665103" tabindex="0" lang="en" aria-label="<u>Cookie Preferences</u> <img src=&quot;https://www.exploratorium.edu/sites/default/files/truste-logo/truste_logo_small.png&quot; style=&quot;position:absolute; padding: 0px 5px&quot;>" style={{cursor:"pointer"}}>
                        <u>Cookie Preferences</u> <img src="https://www.exploratorium.edu/sites/default/files/truste-logo/truste_logo_small.png" 
                        style={{position:"absolute", padding: "0px 5px"}} /></a>
                        <script src="https://consent.trustarc.com/notice?domain=exploratorium.edu&amp;country=us&amp;js=nj2&amp;c=teconsent&amp;text=true" async="async" crossorigin=""></script></span></p>
              </div>
            </div>
          </div>
    );
};

export default Footer;
