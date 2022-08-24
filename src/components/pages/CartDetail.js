import React from "react";
import { connect } from "react-redux";
import { toggle } from "../actions";
import { getId } from "../actions";
import { Link } from "react-router-dom";
import leftArrowLight from '../img/leftArrowLight.png'
import leftArrowDark from '../img/leftArrowDark.png'

function CartDetail(props){
    console.log(props)
    const mode = props.isToggle ? 'dark' : 'light'
    const icon = props.isToggle ? leftArrowDark : leftArrowLight 
    const style = { boxShadow: props.isToggle ? '0 0 7px black' : '0 0 7px gray'}
    return (
        <div className={`cartDetail ${mode}-theme`}>

           <Link to='/' style={{textDecoration:"none"}} > 
                <div style={style} className={`btnBackDiv ${mode}-themeForHeader`}  >
                    <img className="btnIcon" alt="" src={icon} />
                    <button className={`backBtn ${mode}-themeForHeader `}>Back</button>
                </div>
            </Link>
            <div className="detail">
                <img className="detail-flag" alt="" src={props.countries[props.id].flag || props.countries[props.id].flags.png} />
                <div className="detail-info">
                    <div className="info-header"><h2>{props.countries[props.id].name}</h2></div>
                    <div className="info-mid">
                        <div className="info-mid-left" >
                            <p>Native Name: <span>{props.countries[props.id].nativeName}</span></p>
                            <p>Population: <span>{props.countries[props.id].population}</span></p>
                            <p>Region: <span>{props.countries[props.id].region}</span></p>
                            <p>Sub Region: <span>{props.countries[props.id].subregion}</span></p>
                            <p>Capital: <span>{props.countries[props.id].capital}</span></p>
                        </div>
                        <div className="info-mid-right" >
                            <p>Top Level Domain: <span>{props.countries[props.id].topLevelDomain}</span></p>
                            <p>Currencies: <span>{props.countries[props.id].currencies[0].name}</span></p>
                            <p>Languages: <span>{props.countries[props.id].languages.map(item => item.name)}</span></p>
                        </div>
                    </div>
                    <div className="info-end">
                            <p>Border Countries:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        countries:state.countries,
        isToggle:state.isToggle,
        id: state.id
    }
}
export default connect(mapStateToProps, {toggle})(CartDetail)