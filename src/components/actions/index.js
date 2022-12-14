import axios from "axios"

export const toggle = () => dispatch => {
   dispatch({type: 'TOGGLE'})
}

export const getCountries = () => dispatch => {
   dispatch({type:'GET_COUNTRIES_START'})
   axios
   .get("https://restcountries.com/v2/all")
   .then(response => dispatch({type: 'GET_COUNTRIES_SUCCESS', payload: response.data}))
}

export const getId = (id)  => dispatch => {
   dispatch({type: 'ID', payload: id})
}

export const filterCountries = (arrayOfCountries) => dispatch => {
   dispatch({type: 'FILTER', payload: arrayOfCountries})
}

export const getName = (name) => dispatch => {
   dispatch({type: 'GET_NAME', payload: name})
}
export const setIsCameBackHomePage = () => dispatch => {
   dispatch({type: 'SET_IS_CAME_BACK_HOME_PAGE'})
}