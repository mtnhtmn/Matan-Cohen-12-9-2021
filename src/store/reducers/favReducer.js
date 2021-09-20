const initialState = {
    fav: localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')) :[],
}

export const favReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'ADDING_TO_FAV':
            return {
                ...state,
                fav:[...state.fav,action.payload.city]
            }
        default:
            return state
    }
}