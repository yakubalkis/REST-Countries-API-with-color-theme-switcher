const INITIAL_STATE = {
    isLoading:false,
    isToggle:false,
    countries:[],
    id:'',
    nameOf:'',
    filteredCountries:[],
    isCameBackHomePage:false
}

export const reducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'TOGGLE':
            return {...state, isToggle:!state.isToggle}
        case 'ID':
            return {...state, id: action.payload}
        case 'GET_COUNTRIES_START':
            return {...state, isLoading:true}
        case 'GET_COUNTRIES_SUCCESS':
            return {...state, countries: action.payload, isLoading:false}
        case 'FILTER':
            return {...state, filteredCountries: action.payload}
        case 'GET_NAME':
            return {...state, nameOf: action.payload }
        case 'SET_IS_CAME_BACK_HOME_PAGE':
            return {...state, isCameBackHomePage:true}
        default:
            return state
    }
   
}
