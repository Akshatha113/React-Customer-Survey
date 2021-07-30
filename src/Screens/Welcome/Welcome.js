import React from 'react';
import './Welcome.scss';
// import girlLaptop from "./assets/images/girlLaptop.jpg";

function Welcome() {
    
  return (
    <div className="content bg-white flex-col">
        <div className="top-content">
            <div className="heading">
                <span className="white-text">Share your</span>
                <span className="yellow-text">recent experience</span>
            </div>  
        </div>
        <div className="bottom-content dflt-padding flex-display">
            <div className="left dflt-padding">
                <h2 style={{marginTop:"0"}}>Share your feedback</h2>
                <div className="incentive flex-display">
                    <div className="font-bold center-align">Duration: 1 min</div>
                    <div className="font-bold center-align">Question: 4</div>
                </div>
                <div className="margin-top-bottom">
                    <p>Hey <span className="blue-text font-bold">FirstName,</span></p>
                    <p>I value your feedback, particulary with how we went managing your case</p>
                    <p>I am always looking forward to improve our customer experience to better serve you in the future</p>
                    <p className="regards"><span>Thank you,</span>
                        <span>John</span>
                        <span>Optus senior Expert</span>
                    </p>
                </div>
                <div>
                    <button className="font-bold">Start</button>
                </div>
            </div>
            <div className="right dflt-padding">
                {/* <img src={girlLaptop} className="girlLaptop"></img> */}
            </div>
            
        </div>
    </div>
  );
}

export default Welcome;
