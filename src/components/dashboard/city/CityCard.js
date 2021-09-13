import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WeatherCard from "../weather/WeatherCard";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
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
});

const CityCard = ({cityData,weatherData}) => {

    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {cityData.EnglishName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {cityData.Country.EnglishName}
                </Typography>
                <Typography variant="body2" component="p">
                    {}
                    <br />
                </Typography>
                <hr/>
                <WeatherCard weatherData={weatherData}/>
            </CardContent>
        </Card>
    );
}


export default CityCard
