// import { bindActionCreators } from 'redux'
import { FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS } from '../actions/index'

export const initialState = {
    isLoading: false,
    forecast: [],
    error: 'No errors'
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                forecast: action.payload,
                isLoading: false,
            }
         default:
             return state
    }
}