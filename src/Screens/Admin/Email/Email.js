import React, {useState} from 'react';
import './Email.scss';

function Email() {

    const [mode, setMode] = useState("email");
    
    return (
        <div className="email-box bg-white">
            <h3>Sending a Survey</h3>
            <input type="radio" value="sms" checked={mode==="sms"} onChange={()=>setMode("sms")}></input>SMS
            <input type="radio" value="email" checked={mode==="email"} onChange={()=>setMode("email")}></input>Email
            <br>
            </br><div>
                {mode === "sms" && <input type="number" placeholder="Phone number"></input> }
                {mode === "email" && <input type="email" placeholder="Email"></input> }
            </div>
            <br></br>
            <button>Send</button>
        </div>
    );
}

export default Email;
