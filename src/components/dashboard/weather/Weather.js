import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Container, Grid} from "@material-ui/core";
import {getWeather} from "../../../Store/actions/weatherAction";
import WeatherCard from "./WeatherCard";

const Weather = ({getWeather, weatherData}) => {


    useEffect(() => {
        getWeather()
    }, [getWeather])


    return (
        <div>
            {weatherData&& <Container>
                <Grid container justifyContent={'center'}>
                    <Grid item sm={5}>
                        <WeatherCard weatherData={weatherData}/>
                    </Grid>
                </Grid>
            </Container>}
        </div>
    );
};


const mapStateToProps = state => {
    return {
        weatherData: state.weatherReducer.weatherData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWeather: () => dispatch(getWeather()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);


