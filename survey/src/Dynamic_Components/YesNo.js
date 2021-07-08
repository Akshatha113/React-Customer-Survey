import React from 'react';
import './styles/Welcome.css';

function YesNo() {
    return (
        <div>
            <div class="ans-box">
                <input type="text" name="qns" className="input-field ml-10" 
                 placeholder="Please enter question..." required></input>
                <p className="question font-bold ml-10"></p>
            </div>
        </div>
    );
}
export default YesNo;