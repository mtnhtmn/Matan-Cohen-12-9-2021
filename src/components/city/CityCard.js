import React from 'react';
import Forecast from "../forecast/Forecast";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Star as StarIcon} from '@mui/icons-material'

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

const CityCard = ({cityData,temperature, forecastData,addToFav,isInFav,weatherText}) => {
    const classes = useStyles();
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {cityData.EnglishName}: {temperature}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {cityData.Country.EnglishName}
                </Typography>
                <Forecast forecastData={forecastData}/>
            </CardContent>
            <CardActions>
                <Button onClick={()=>addToFav(cityData,temperature,weatherText)}>
                    add to fav
                </Button>
                {isInFav && <StarIcon/>}
            </CardActions>
        </Card>
    );
}

export default CityCard


