import { useCountryContext } from '../Contexts/CountryContext';
import { useParams } from 'react-router-dom';
import { Card } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MyCountryModal from "./MyCountryModal";
import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import NotFound from '../pages/NotFound'


const CountryData = (props) => {
    const CountriesJson = useCountryContext();
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
            padding: '.5em'
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
            }
        },
    }));

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
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
                </Card>
                    <MyCountryModal openState={open} handleClose={handleClose} country={country} />
                </>
                : <NotFound />}


        </div>
    );

};

export default CountryData;