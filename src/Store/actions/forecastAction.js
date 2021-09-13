import axios from "axios";

export const getForecast = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_FORECAST_DATA'})
        axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=QYhA7p4xz5lMx341gvMjtO6W88aOrQhY"
        )
            .then(response => {
                const data = response.data
                dispatch({type: 'FETCH_FORECAST_DATA_SUCCESS', data})
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch({type: 'FETCH_FORECAST_DATA_FAILED', errorMessage})
            })
    }
}