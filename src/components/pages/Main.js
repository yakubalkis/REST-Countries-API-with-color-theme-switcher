import React, { useEffect,  useState } from "react";
import Cart from "./Cart";
import darkSearchIcon from '../img/search-iconDark.png'
import lightSearchIcon from '../img/search-iconLight.png'
import upArrowLight from '../img/upArrowLight.png'
import upArrowDark from '../img/upArrowDark.png'
import downArrowLight from '../img/downArrowLight.png'
import downArrowDark from '../img/downArrowDark.png'
import { getCountries,filterCountries  } from "../actions";
import { connect } from "react-redux";



function Main(props){

   const [arrowIcon, setArrowIcon] = useState()
   const [isHovered,setIshovered] = useState(false)
   const [region, setRegion] = useState('')
   const [searchedCountry, setSearchedCountry] = useState('')
   const [shouldFiltre, setShouldFiltre] = useState(false)
   const mode = props.isToggle ? 'dark' : 'light'
   const searchIcon = props.isToggle ? darkSearchIcon: lightSearchIcon
    

    useEffect(() => {
        props.getCountries() // fetch data
      
    },[])
    useEffect(() => {
        props.filterCountries(props.countries)
    })
   
    useEffect(() => {
       const icon = isHovered ? mode ==='dark' ? downArrowDark : downArrowLight : mode==='light' ? upArrowLight : upArrowDark
       setArrowIcon(icon)
    },[isHovered,mode])
 
    
    function filteredCountries(){
        if(shouldFiltre===true){
            return props.countries.filter((country) => country.name.toLowerCase().includes(searchedCountry.toLowerCase())) 
        }else if(shouldFiltre===false){
            return props.countries.filter((country) => country.region.toLowerCase().includes(region.toLocaleLowerCase())) 
        }
    }
   

    useEffect(() => {
        props.filterCountries(filteredCountries())
    },[shouldFiltre])

    function handleSearch (event){
        setShouldFiltre(true)
        setSearchedCountry(event.target.value)
    }

    function handleSelect (event) { 
        setShouldFiltre(false)
        setRegion(event.target.value)
    }
  
    const Carts = filteredCountries().map((item,i) => {
        if(item.name==='Antarctica'){return false} // antarctica isn't country
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
                    <input type='text' className={`input-search ${mode}-themeForHeader`} placeholder="Search for a country" onChange={handleSearch} value={searchedCountry} />
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
export default connect(mapStateToProps,{getCountries, filterCountries})(Main)