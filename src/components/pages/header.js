import React from "react";
import darkModeIcon from '../img/night-mode.png'
import lightModeIcon from '../img/light-mode.png'
import { connect } from "react-redux";
import { toggle } from "../actions"; 

 function Header(props){
    console.log(props)
    const mode = props.isToggle ? 'dark' : 'light'
    
    return(
        <header className={`header ${mode}-themeForHeader`}>
            <h2 className={`${mode}-themeForHeader`}>Where in the world?</h2>
            <div className="mode">
                <img alt="" className={`light-icon ${mode}-theme`} src={lightModeIcon} />
                <div onClick={() => props.toggle()} className={`pipe ${mode}-themeForPipe`} >
                    <div  className={`circle ${mode}-theme`}></div>
                </div>
                <img alt="" className={`dark-icon ${mode}-theme`} src={darkModeIcon} />
            </div>
      </header>
    )
}
const mapStateToProps = state => {
    return  {
        isToggle: state.isToggle
    }
}
export default connect(mapStateToProps, {toggle})(Header)