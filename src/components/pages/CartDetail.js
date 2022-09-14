import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toggle, filterCountries,setIsCameBackHomePage } from "../actions";
import BorderCountry from "./BorderCountries";
import addDot from "../addDotFunction/addDot";
import leftArrowLight from '../img/leftArrowLight.png'
import leftArrowDark from '../img/leftArrowDark.png'

function CartDetail(props){
    const filtered = props.filteredCountries.filter(country => country.name === props.nameOf)[0]
    const borderCountries = filtered.borders?.map(alphaCode => props.countries.filter(country => country.alpha3Code===alphaCode))
    const mode = props.isToggle ? 'dark' : 'light'
    const icon = props.isToggle ? leftArrowDark : leftArrowLight 
    const style = { boxShadow: props.isToggle ? '0 0 7px black' : '0 0 7px gray'}
    const {pathname} = useLocation()
   
    useEffect(() => {
        if(pathname==='/cartDetail'){
            props.setIsCameBackHomePage()
        }
    },[])


    const borders = borderCountries?.map((country,i) => {
        return (
            <BorderCountry key={i} name={country[0].name} />
        )
    })
    return (
        <div className={`cartDetail ${mode}-theme`}>

           <Link to='/' style={{textDecoration:"none"}} > 
                <div style={style} className={`btnBackDiv ${mode}-themeForHeader`} >
                    <img className="btnIcon" alt="" src={icon} />
                    <button className={`backBtn ${mode}-themeForHeader `}>Back</button>
                </div>
            </Link>
            <div className="detail">
                <img className="detail-flag" alt="" src={filtered.flag} />
                <div className="detail-info">
                    <div className="info-header"><h2>{filtered.name}</h2></div>
                    <div className="info-mid">
                        <div className="info-mid-left" >
                            <p>Native Name: <span>{filtered.nativeName}</span></p>
                            <p>Population: <span>{addDot(filtered.population)}</span></p>
                            <p>Region: <span>{filtered.region}</span></p>
                            <p>Sub Region: <span>{filtered.subregion}</span></p>
                            <p>Capital: <span>{filtered.capital}</span></p>
                        </div>
                        <div className="info-mid-right" >
                            <p>Top Level Domain: <span>{filtered.topLevelDomain}</span></p>
                            <p>Currencies: <span>{filtered.currencies[0].name}</span></p>
                            <p>Languages: <span>{filtered.languages.map(item => item.name)}</span></p>
                        </div>
                    </div>
                    <div className="info-end">
                            <h5 className="info-end-header">Border Countries: </h5>
                            <div className="borders">{borders}</div>
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
        id: state.id,
        filteredCountries: state.filteredCountries,
        nameOf: state.nameOf
    }
}
export default connect(mapStateToProps, {toggle, filterCountries,setIsCameBackHomePage})(CartDetail)