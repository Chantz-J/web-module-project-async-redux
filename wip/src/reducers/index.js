import { bindActionCreators } from 'redux'

export const initialState = {
    isLoading: false,
    forecast: [],
    error: 'No errors'
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        default: 
        return state
    }
}