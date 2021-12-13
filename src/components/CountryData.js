import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MoneyIcon from '@mui/icons-material/Money';
import { Card } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCountryContext } from '../Contexts/CountryContext';
import NotFound from '../pages/NotFound';
import MyCountryModal from "./MyCountryModal";


const CountryData = (props) => {
    const { CountriesJson } = useCountryContext();
    const params = useParams();
    let country = {}

    if (!props.country) {

        country = CountriesJson.find(item => item.id.toString() === params.countryId)
    }
    else {
        country = props.country
    }

    const useStyles = makeStyles((theme) => ({
        countryCard: {
            width: '15em',
            margin: 'auto',
            padding: '.5em',

        },
        countryData: {
            height: '200px',
            cursor: 'pointer',
            "& p": {
                margin: '5px',
                paddingLeft: '10px',
                fontSize: '14px',
                display: 'flex',
                justifyContent: 'flex-start'
            },
            "& h4": {
                margin: '5px',
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'flex-start'
            },
            "&:hover": {
                backgroundColor: "#f5f1f1"
            }
        },
    }));

    const classes = useStyles();

    const { favorites, updateFavorites } = useCountryContext()
    const [favorite, setFavorite] = useState(false)
    const handleFavoriteClick = () => {
        updateFavorites(country)
    }

    useEffect(() => {
        favorites.includes(country.id) ? setFavorite(true) : setFavorite(false)
    }, [country.id, favorites])

    const [open, setOpen] = useState(false);

    const handleOpen = (event) => {
        // Seriously, this is the dumbest thing... 
        // It feels so hacky and takes forever to actually change the state, 
        // but whatever, I guess...
        // I don't have the time to figure out a better way to 
        if (event.target.nodeName !== 'path')
            setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div
            className={classes.countryCard}>
            {country ?
                <> <Card
                    className={classes.countryData}
                    onClick={handleOpen}
                >
                    <h4>{country.name}</h4>
                    <p>{country.subregion === "" ? "N/A" : country.subregion}, {country.region === "" ? "N/A" : country.region}</p>
                    <p><LocationCityIcon />{country.capital}</p>
                    <p><MoneyIcon />{country.currency_symbol} ({country.currency})</p>
                    <p><IconButton className="favoriteIcon" sx={{ p: 0, m: 0 }} onClick={handleFavoriteClick}>
                        <FavoriteIcon sx={{ color: favorite ? '#F00' : '#000' }} />
                    </IconButton></p>
                </Card>
                    <MyCountryModal openState={open} handleClose={handleClose} country={country} />
                </>
                : <NotFound />}


        </div>
    );

};

export default CountryData;