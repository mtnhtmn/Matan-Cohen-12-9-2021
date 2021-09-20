import {combineReducers} from "redux";
import {cityReducer} from "./cityReducer";
import {weatherReducer} from "./weatherReducer";
import {forecastReducer} from "./forecastReducer";
import {favReducer} from "./favReducer";


const rootReducer = combineReducers({
    cityReducer,
    weatherReducer,
    forecastReducer,
    favReducer,
})

export default rootReducer
