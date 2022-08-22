import React from "react";
import darkModeIcon from '../img/night-mode.png'
import lightModeIcon from '../img/light-mode.png'

export default function Header(){
    
    return(
        <header className="header dark-themeForHeader">
            <h2 className="dark-themeForHeader">Where in the world?</h2>
            <div className="mode">
                <img alt="" className="light-icon dark-theme" src={lightModeIcon} />
                <div className="pipe light-theme" >
                    <div  className="circle dark-theme"></div>
                </div>
                <img alt="" className="dark-icon dark-theme" src={darkModeIcon} />
            </div>
      </header>
    )
}