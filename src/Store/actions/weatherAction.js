import axios from "axios";

export const getWeather = (cityKey='215854') => {
    return (dispatch) => {
        dispatch({type: 'FETCH_WEATHER_DATA'})
        axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=QYhA7p4xz5lMx341gvMjtO6W88aOrQhY`
        )
            .then(response => {
                const data = response.data
                console.log(data);
                dispatch({type: 'FETCH_WEATHER_DATA_SUCCESS', payload:{weatherData:data[0]}})
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch({type: 'FETCH_WEATHER_DATA_FAILED', errorMessage})
            })
    }


}