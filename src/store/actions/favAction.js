
export const addToFav = (cityData,temperature,weatherText) => {
    return (dispatch,getState) => {
        const city = {
            EnglishName:cityData.EnglishName,
            Key:cityData.Key,
            temperature,
            weatherText,
        }
        const fav = getState().favReducer.fav
        if(!fav.find(item=>item.Key === city.Key)){
            localStorage.setItem('fav',JSON.stringify([...fav,city]))
            dispatch({type: 'ADDING_TO_FAV',payload:{city}})
        }
    }
}