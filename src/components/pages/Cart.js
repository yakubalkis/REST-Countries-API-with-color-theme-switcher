import React from "react";
import { connect } from "react-redux";
import { toggle } from "../actions";
import { getId } from "../actions";

import {Link, Routes, Route} from 'react-router-dom'

function Cart(props){
 
    const mode = props.isToggle ? 'dark' : 'light'
  
    return(
    <div className={`cart ${mode}-themeForHeader`}>
        <img  alt="" src={props.src} className="flag" />
        <div className="cart-info">
            <h4>{props.name}</h4>
            <div className="cart-info-p">
                <p>Population: <span className="span">{props.population}</span></p>
                <p>Region: <span className="span">{props.region}</span></p>
                <p>Capital: <span className="span">{props.capital}</span></p>
            </div>
        </div>
        <Link to='/cartDetail'  ><button className={`detailBtn ${mode}-themeForPipe`} onClick={() => {props.getId(props.idOf)}} >More...</button></Link>
       
    </div>
    )
}
const mapStateToProps = state =>  {
    return {
        isToggle: state.isToggle,
        id: state.id
    }
}

export default connect(mapStateToProps, {toggle, getId})(Cart)