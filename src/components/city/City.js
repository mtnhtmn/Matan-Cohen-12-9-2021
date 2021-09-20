import React from 'react';
import {getCity} from "../../store/actions/cityAction";
import {connect} from "react-redux";
import CityCard from "./CityCard";
import {getForecast} from "../../store/actions/forecastAction";
import {getWeather} from "../../store/actions/weatherAction";
import {addToFav} from "../../store/actions/favAction";


const City = ({getCity, getForecast, getWeather, cityData, weatherData, forecastData,fav, addToFav, cityName}) => {

    const loadData =React.useCallback( async () => {
        await getCity(cityName)
        getForecast()
        getWeather()
    },[cityName,getCity,getForecast,getWeather])

    React.useEffect(() => {
        loadData()
    }, [loadData,getCity, getForecast, getWeather, cityName])
    return (

        cityData && weatherData && forecastData &&

        <CityCard isInFav={fav.find(item=>item.Key===cityData.Key)} addToFav={addToFav} cityData={cityData} temperature={weatherData.Temperature.Metric.Value} weatherText={weatherData.WeatherText} forecastData={forecastData}/>

    );
};


const mapStateToProps = state => {
    return {
        cityData: state.cityReducer.cityData,
        weatherData: state.weatherReducer.weatherData,
        error: state.cityReducer.error,
        forecastData: state.forecastReducer.forecastData,
        fav: state.favReducer.fav,
    }
}
export default connect(mapStateToProps, {getCity, getWeather, getForecast, addToFav})(City);


