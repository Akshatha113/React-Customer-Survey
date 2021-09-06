import React from "react";
import './Header.scss'; 

const Header=()=>{

    return(
        <div className="toolbar">
            <a href="https://www.optus.com.au/" className="optus" >   
                <img src="https://image.exacttarget.com/lib/fe9412727565007a72/m/4/Optus-logo-desktop.png" />
            </a>  
        </div>
    );
}

export default Header;