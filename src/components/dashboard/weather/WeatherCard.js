import React from 'react';
import {Typography} from "@material-ui/core";

const WeatherCard = ({weatherData}) => {
    console.log(weatherData)
    return (
        <div>
            <Typography>
                {weatherData.Temperature.Metric.Value}
            </Typography>
        </div>
    );
};

export default WeatherCard;
