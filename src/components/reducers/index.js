const INITIAL_STATE = {
    isToggle:false,
    countries:[],

}

export const reducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'TOGGLE':
            return {...state, isToggle:!state.isToggle}
        case 'GET_COUNTRIES_SUCCESS':
            return {...state, countries: action.payload}
        default:
            return state
    }
   
}
