import React from "react";
import { connect } from "react-redux";

function BorderCountries(props){
   
    const mode = props.isToggle ? 'dark' : 'light'
    const style = { boxShadow: props.isToggle ? '0 0 1px black' : '0 0 1px gray'}

    return(
            <p className={`${mode}-themeForHeader borderCountry`} 
               style={style}>{props.name}
            </p>
    )
}
const mapStateToProps = state => {
   return {
        isToggle:state.isToggle
   }
}
export default connect(mapStateToProps)(BorderCountries)