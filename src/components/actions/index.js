import axios from "axios"

export const toggle = () => dispatch => {
   dispatch({type: 'TOGGLE'})
}

export const getCountries = () => dispatch => {
   axios
   .get("https://restcountries.com/v2/all")
   .then(response => dispatch({type: 'GET_COUNTRIES_SUCCESS', payload: response.data}))
   
}