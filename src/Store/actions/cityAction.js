import axios from "axios";

export const getCity = (cityName='tel-aviv') => {
    return (dispatch) => {
        dispatch({type: 'FETCH_CITY_DATA'})
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=QYhA7p4xz5lMx341gvMjtO6W88aOrQhY&q=${cityName}`
        )
            .then(response => {
                const data = response.data
                dispatch({type: 'FETCH_CITY_DATA_SUCCESS', payload:{cityData:data[0]}})
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch({type: 'FETCH_CITY_DATA_FAILED', errorMessage})
            })
    }


}