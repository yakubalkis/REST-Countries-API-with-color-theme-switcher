import React from "react";

export default function Cart(props){
    return(
    <div className="cart">
        <img src={props.src} className="flag" />
        <div className="cart-info">
            <h4>{props.name}</h4>
            <div className="cart-info-p">
                <p>Population: <span>{props.population}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>
    </div>
    )
}