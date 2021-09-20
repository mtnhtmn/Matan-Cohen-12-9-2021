import React from 'react';
import {getCity} from "../../store/actions/cityAction";
import {connect} from "react-redux";
import CityCard from "./CityCard";
import {getForecast} from "../../store/actions/forecastAction";
import {getWeather} from "../../store/actions/weatherAction";


const City = ({getCity, getForecast, getWeather, cityData, weatherData, forecastData, cityName}) => {

    const loadData = async () => {
        await getCity(cityName)
        getForecast()
        getWeather()
    }

    React.useEffect(() => {
        loadData()
    }, [getCity, getForecast, getWeather, cityName])


    return (

        cityData && weatherData && forecastData &&

        <CityCard cityData={cityData} weatherData={weatherData} forecastData={forecastData}/>

    );
};


const mapStateToProps = state => {
    return {
        cityData: state.cityReducer.cityData,
        weatherData: state.weatherReducer.weatherData,
        error: state.cityReducer.error,
        forecastData: state.forecastReducer.forecastData,
    }
}
export default connect(mapStateToProps, {getCity, getWeather, getForecast})(City);


