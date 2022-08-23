import React from "react";
import { connect } from "react-redux";
import { toggle } from "../actions";
import leftArrowLight from '../img/leftArrowLight.png'
import leftArrowDark from '../img/leftArrowDark.png'

function CartDetail(props){
    const mode = props.isToggle ? 'dark' : 'light'
    const icon = props.isToggle ? leftArrowDark : leftArrowLight
    return (
        <div className={`cartDetail ${mode}-theme`}>
            <div className={`btnIconDiv ${mode}-themeForHeader`} onClick={() => console.log('heloo')} >
                <img className="btnIcon" alt="" src={icon} />
                <button className={`backBtn ${mode}-themeForHeader `}>Back</button>
            </div>
            <div className="detail">
                <div className="detail-flag"><img alt=""/></div>
                <div className="detail-info">
                    <div className="info-header">Belgium</div>
                    <div className="info-mid">
                        <div className="info-mid-left" >
                            <p>Native Name: <span>Belgie</span></p>
                            <p>Population: <span>11.319.511</span></p>
                            <p>Region: <span>Europe</span></p>
                            <p>Sub Region: <span>Western Europe</span></p>
                            <p>Capital <span>Brussels</span></p>
                        </div>
                        <div className="info-mid-right" >
                            <p>Top Level Domain: <span>.be</span></p>
                            <p>Currencies: <span>Euro</span></p>
                            <p>Languages: <span>Dutch, French, German</span></p>
                        </div>
                        <div info-end>
                            <p>Border Countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isToggle:state.isToggle
    }
}
export default connect(mapStateToProps, {toggle})(CartDetail)