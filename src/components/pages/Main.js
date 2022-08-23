import React, { useEffect,  useState } from "react";
import Cart from "./Cart";
import darkSearchIcon from '../img/search-iconDark.png'
import lightSearchIcon from '../img/search-iconLight.png'
import upArrowLight from '../img/upArrowLight.png'
import upArrowDark from '../img/upArrowDark.png'
import downArrowLight from '../img/downArrowLight.png'
import downArrowDark from '../img/downArrowDark.png'
import { toggle } from "../actions";
import { connect } from "react-redux";
import { getCountries } from "../actions";

function Main(props){

   const [arrowIcon, setArrowIcon] = useState()
    const mode = props.isToggle ? 'dark' : 'light'
    const searchIcon = props.isToggle ? darkSearchIcon: lightSearchIcon
    const [isHovered,setIshovered] = useState(false)

    useEffect(() => {
        props.getCountries() // fetch data
    },[])

    useEffect(() => {
       const icon = isHovered ? mode ==='dark' ? downArrowDark : downArrowLight : mode==='light' ? upArrowLight : upArrowDark
       setArrowIcon(icon)
    },[isHovered,mode])

   
    const Carts= props.countries.map((item,i) => (
        <Cart 
        key={i} 
        src={item.flag} 
        population={item.population} 
        region={item.region} 
        capital={item.capital} 
        name = {item.name}
        />
    ))
    return(
        <main className={`main ${mode}-theme`}>
            <div className="search-dropdown">
                <div className="search">
                    <img alt="" className="search-icon" src={searchIcon} />
                    <input type='text' className={`input-search ${mode}-themeForHeader`} placeholder="Search for a country" />
                </div>
                <div className={`dropdown ${mode}-themeForHeader`} onMouseEnter={() => setIshovered(true)} onMouseLeave={() => setIshovered(false)}>
                    <p className={`dropBtn ${mode}-themeForHeader`}>Filter by Region <img className="arrowIcon" alt="" src={arrowIcon} /></p>
                    <div className="dropdown-content">
                        <a href="#">Africa</a>
                        <a href="#">America</a>
                        <a href="#">Asia</a>
                        <a href="#">Europe</a>
                        <a href="#">Oceania</a>
                    </div>
                </div>
           </div>
           <div className="carts">
           {Carts}
           </div>
            
        </main>
    )
}
const mapStateToProps = state => {
    return {
        countries: state.countries,
        isToggle: state.isToggle
    }
}
export default connect(mapStateToProps,{getCountries, toggle})(Main)