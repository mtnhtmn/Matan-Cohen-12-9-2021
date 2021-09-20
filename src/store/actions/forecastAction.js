import axios from "axios";

export const getForecast = () => {
    return (dispatch,getState) => {
        dispatch({type: 'FETCH_FORECAST_DATA'})
        const cityData = getState().cityReducer.cityData
        axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityData.Key}?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw`
        )
            .then(response => {
                const data = response.data
                const action = {type: 'FETCH_FORECAST_DATA_SUCCESS', payload:{forecastData:data.DailyForecasts}}
                dispatch(action)
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch({type: 'FETCH_FORECAST_DATA_FAILED', errorMessage})
            })
    }
}


