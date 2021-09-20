import React from 'react';
import Forecast from "../forecast/Forecast";
import {Card, CardContent, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
    },
    pos: {
        marginBottom: 12,
    },
    forecastContainer: {
        display: 'flex',
        gap: 10
    }
});

const CityCard = ({cityData,weatherData, forecastData}) => {


    const classes = useStyles();
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {cityData.EnglishName}: {weatherData.Temperature.Metric.Value}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {cityData.Country.EnglishName}
                </Typography>
                <Forecast forecastData={forecastData}/>
            </CardContent>
        </Card>
    );
}


export default CityCard


