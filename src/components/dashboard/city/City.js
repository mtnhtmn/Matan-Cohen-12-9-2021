import React, {useEffect} from 'react';
import {getCity} from "../../../Store/actions/cityAction";
import {connect} from "react-redux";
import {Container, Grid} from "@material-ui/core";
import CityCard from "./CityCard";
import {getForecast} from "../../../Store/actions/forecastAction";
import {getWeather} from "../../../Store/actions/weatherAction";


const City = ({getCity,getForecast,getWeather, cityData, loading, weatherData,forecast}) => {

    useEffect(() => {
        getCity()
        getForecast()
        getWeather()
    }, [getCity, getForecast])


    return (
        <div>
            {loading? <div>Loading...</div> : null}
            {cityData&&weatherData &&<Container>
                        <Grid container justifyContent={'center'}>
                            <Grid item sm={5}>
                                <CityCard cityData={cityData} weatherData={weatherData}/>
                            </Grid>
                        </Grid>
                    </Container>}
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cityData: state.cityReducer.cityData,
        weatherData: state.weatherReducer.weatherData,
        loading: state.cityReducer.loading,
        error: state.cityReducer.error,
        forecast: state.forecastReducer.forecastData,
    }
}
export default connect(mapStateToProps, {getCity,getWeather,getForecast})(City);


