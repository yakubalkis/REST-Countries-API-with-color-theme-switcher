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
import { filterCountries } from "../actions";


function Main(props){

   const [arrowIcon, setArrowIcon] = useState()
   const [isHovered,setIshovered] = useState(false)
   const [region, setRegion] = useState('')
   const mode = props.isToggle ? 'dark' : 'light'
   const searchIcon = props.isToggle ? darkSearchIcon: lightSearchIcon
    

    useEffect(() => {
        props.getCountries() // fetch data
       
    },[])

    useEffect(() => {
       const icon = isHovered ? mode ==='dark' ? downArrowDark : downArrowLight : mode==='light' ? upArrowLight : upArrowDark
       setArrowIcon(icon)
    },[isHovered,mode])
 
    useEffect(() => {
        props.filterCountries(filteredRegion)
    },[region])
    
    const filteredRegion = props.countries.filter((country) => country.region.toLowerCase().includes(region.toLocaleLowerCase()))
    function handleSelect (event) { 
        setRegion(event.target.value)
        
    }
  
    const Carts = filteredRegion.map((item,i) => {
        return (
          <Cart 
                key={i}
                idOf={i} 
                src={item.flag} 
                population={item.population} 
                region={item.region} 
                capital={item.capital} 
                name = {item.name}
          />
            )
    })
   
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
                        <option value='Africa' onClick={(e) => handleSelect(e)}>Africa</option>
                        <option value='Americas' onClick={(e) => handleSelect(e)} >America</option>
                        <option value='Asia' onClick={(e) => handleSelect(e)}>Asia</option>
                        <option value='Europe' onClick={(e) => handleSelect(e)}>Europe</option>
                        <option value='Oceania' onClick={(e) => handleSelect(e)}>Oceania</option>
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
export default connect(mapStateToProps,{getCountries, toggle, filterCountries})(Main)