import {combineReducers} from "redux";
import {cityReducer} from "./cityReducer";
import {weatherReducer} from "./weatherReducer";
import {forecastReducer} from "./forecastReducer";


const rootReducer = combineReducers({
    cityReducer,
    weatherReducer,
    forecastReducer,
})

export default rootReducer
