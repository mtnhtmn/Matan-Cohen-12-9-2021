const initialState = {
    loading: false,
    cityData: null,
    error: '',
}

export const cityReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CITY_DATA':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_CITY_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                cityData: action.payload.cityData,
                error: ''
            }
        case 'FETCH_CITY_DATA_FAILED':
            return {
                ...state,
                loading:false,
                cityData: null,
                error: action.errorMessage,
            }
        default:
            return state
    }
}