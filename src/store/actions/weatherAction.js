import axios from "axios";

export const getWeather = () => {
    return (dispatch,getState) => {
        dispatch({type: 'FETCH_WEATHER_DATA'})
        const cityData = getState().cityReducer.cityData
        axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw`
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