import React from "react";
import './Footer.scss'; 

const Footer=()=>{
    return(
        <footer>
            <div id="site-footer">
                <div className="container">
                    <div className="row">        
                        <ul className="col-sm-4">
                        <h6 className="header">MY OPTUS APP</h6>
                        <li><a href="https://www.optus.com.au/customer-extras/mobile-apps/my-optus-app" className="sd-hide">My Optus App</a></li>
                        <li><a href="https://sport.optus.com.au" className="sd-hide">Optus Sport</a></li>
                        <li><a href="https://yescrowd.optus.com.au/" className="sd-hide">Yes Crowd</a></li>
                        <li><a href="https://www.optus.com.au/about/legal/copyright" className="sd-hide">Copyright</a></li>
                        <li><a href="https://www.optus.com.au/entertainment/hype" className="sd-hide">Hype</a></li>
                        </ul>
                        <ul className="col-sm-4">
                        <h6 className="header">OPTUS GUIDE</h6>
                        <li><a href="https://www.optus.com.au/about/legal/privacy-and-security">Privacy &amp; Security</a></li>
                        <li><a href="https://www.optus.com.au/shop/stores" className="sd-hide">Store Locator</a></li>
                        <li><a href="https://www.optus.com.au/shop/support/answer/how-to-contact-optus?answerId=1371&#38;question=How%20to%20Contact%20Optus&#38;typeId=6">Contact Us</a></li>
                        <li><a href="https://www.optus.com.au/wholesale?SID=con:hme:whls:othr:foot:othr:whls" className="sd-hide">Wholesale</a></li>
                        <li><a href="https://www.optus.com.au/about/network/regional-coverage/" className="sd-hide">Regional</a></li>
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
