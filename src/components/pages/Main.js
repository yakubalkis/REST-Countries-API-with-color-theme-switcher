import React from "react";
import Cart from "./Cart";
import darkSearchIcon from '../img/search-iconDark.png'
export default function Main(){


    return(
        <main className="main">
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
            <Cart/>
        </main>
    )
}