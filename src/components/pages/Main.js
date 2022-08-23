import React, { useEffect } from "react";
import Cart from "./Cart";
import darkSearchIcon from '../img/search-iconDark.png'
import { toggle } from "../actions";
import { connect } from "react-redux";
import { getCountries } from "../actions";

function Main(props){

const mode = props.isToggle ? 'dark' : 'light'
    useEffect(() => {
        props.getCountries()
    },[])
    console.log(props.countries)
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
                    <img className="search-icon" src={darkSearchIcon} />
                    <input type='text' className="input-search" placeholder="Search for a country" />
                </div>
                <div className="dropdown">
                    <p className="dropBtn">Filter by Region</p>
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