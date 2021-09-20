const initialState = {
    forecastData: [],
    error: '',
}

export const forecastReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FORECAST_DATA':
            return {
                ...state,
            }
        case 'FETCH_FORECAST_DATA_SUCCESS':
            return {
                ...state,
                forecastData: action.payload.forecastData,
                error: ''
            }
        case 'FETCH_FORECAST_DATA_FAILED':
            return {
                ...state,
                forecastData: [],
                error: action.errorMessage,
            }
        default:
            return state
    }
}