const initialState = {
    weatherData: null,
    error: '',
}

export const weatherReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER_DATA':
            return {
                ...state,
            }
        case 'FETCH_WEATHER_DATA_SUCCESS':
            return {
                ...state,
                weatherData: action.payload.weatherData,
                error: ''
            }
        case 'FETCH_WEATHER_DATA_FAILED':
            return {
                ...state,
                weatherData: null,
                error: action.errorMessage,
            }
        default:
            return state
    }
}