import axios from 'axios'

export const FETCH_WEATHER_START = 'FETCH_WEATHER_START'
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'

export const fetchData = () => {
    return (dispatch) => {
        dispatch({type: FETCH_WEATHER_START})
        axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=27.9506&lon=-82.4572&exclude=minutely,hourly,current&appid=fd00afc2eacede80c413580809ffb1da`)
        .then(res => {
            dispatch({type: FETCH_WEATHER_SUCCESS, payload: res.data})
        })
        .catch(err => console.log(err))
    }
} 