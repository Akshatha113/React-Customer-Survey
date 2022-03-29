import React from "react";
import './Footer.scss';

function Footer(){
    return(
        <footer>
            <div id="site-footer">
                <div className="container">
                <div className="rows">        
                    <ul className="support">
                    <h6 className="head">MY OPTUS APP</h6>
                        <li><a href="https://www.optus.com.au/customer-extras/mobile-apps/my-optus-app" className="sd-hide">My Optus App</a></li>
                        <li><a href="https://sport.optus.com.au" className="sd-hide">Optus Sport</a></li>
                        <li><a href="https://yescrowd.optus.com.au/" className="sd-hide">Yes Crowd</a></li>
                        <li><a href="https://www.optus.com.au/about/legal/copyright" className="sd-hide">Copyright</a></li>
                        <li><a href="https://www.optus.com.au/entertainment/hype" className="sd-hide">Hype</a></li>
                    </ul>
                    <ul className="support">
                    <h6 className="head">OPTUS GUIDE</h6>
                        <li><a href="https://www.optus.com.au/about/legal/privacy-and-security">Privacy &amp; Security</a></li>
                        <li><a href="https://www.optus.com.au/shop/stores" className="sd-hide">Store Locator</a></li>
                        <li><a href="https://www.optus.com.au/shop/support/answer/how-to-contact-optus?answerId=1371&#38;question=How%20to%20Contact%20Optus&#38;typeId=6">Contact Us</a></li>
                        <li><a href="https://www.optus.com.au/wholesale?SID=con:hme:whls:othr:foot:othr:whls" className="sd-hide">Wholesale</a></li>
                        <li><a href="https://www.optus.com.au/about/network/regional-coverage/" className="sd-hide">Regional</a></li>
                    </ul>
                    <ul className="support follow">
                    <h6 className="head">FOLLOW US</h6>
                        <div className="icons flex-display">
                            <li><a href="https://www.optus.com.au/customer-extras/mobile-apps/my-optus-app" className="sd-hide"><i className=" fa fa-facebook-square"></i></a></li>
                            <li><a href="https://sport.optus.com.au" className="sd-hide"><i className=" fa fa-twitter-square"></i></a></li>
                            <li><a href="https://yescrowd.optus.com.au/" className="sd-hide"><i className=" fa fa-youtube-play"></i></a></li>
                            <li><a href="https://www.optus.com.au/about/legal/copyright" className="sd-hide"><i className=" fa fa-linkedin-square"></i></a></li>
                            <li><a href="https://www.optus.com.au/entertainment/hype" className="sd-hide"><i className=" fa fa-instagram"></i></a></li>
                        </div>  
                    </ul>
                </div>
                <div className="row1">
                    <ul className="support1">
                    <li><a href="https://www.optus.com.au/shop/stores" className="foot">Store Locator</a></li>
                    <li><a href="https://www.optus.com.au/contactus" className="foot">Contact Us</a></li>
                    <li><a href="https://www.singtel.com/about-us" className="foot">About Singtel</a></li>
                    <li><a href="https://www.optus.com.au/for-you/support/feedback-and-complaints?sid=complaints:source:homepage" className="foot">Feedback &amp; Complaints</a></li>
                    </ul>
                    <p className="icon">&copy; 2021 Singtel Optus Pty Limited</p>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;