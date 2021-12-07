import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useIdentityContext } from 'react-netlify-identity-gotrue';
import { useHistory } from 'react-router-dom';
import { useCountryContext } from '../Contexts/CountryContext';
import CountryData from './CountryData';
import SearchForm from './SearchForm';


const CountryCards = (props) => {
    const identity = useIdentityContext()
    const history = useHistory()

    const CountriesJson = useCountryContext();
    const [filteredRegion, setFilteredRegion] = useState("None");
    const filterRegionChangeHandler = (event) => {
        if (event.target.value === "None") {
            setFilteredRegion("None");
        }
        else {
            setFilteredRegion(event.target.value);
        }
    }

    const filteredCountries = CountriesJson.filter((country) => {
        if (filteredRegion === "None") {
            return CountriesJson
        }
        else if (filteredRegion === "N/A") {
            return country.region === "";
        }
        else {
            return country.region === filteredRegion;
        }
    })

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        backgroundColor: "white",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    const handleNavChoice = (choice) => {
        history.push(`/${choice}`)
    }

    let i = 0;
    let j = 0;

    return (
        <div className="container">
            {identity.user && (
                <>

                    <SearchForm
                        filterRegionChangeHandler={filterRegionChangeHandler}
                        CountriesJson={CountriesJson}
                        filteredRegion={filteredRegion}
                        filteredCountries={filteredCountries}
                    />
                    {
                        <div className="row">
                            {
                                filteredCountries.map((country) => {
                                    return (<CountryData key={`card${j += 1}`}
                                        country={country} />);
                                })
                            }
                        </div>
                    })
                </>
            )}
            {!identity.provisionalUser && !identity.user && (
                <Box sx={style}>
                    <h1>You need to be <Link
                        onClick={() => handleNavChoice('login', false)}>
                        logged in </Link>
                        to view this page!</h1>
                </Box>
            )}
        </div>
    )
};

export default CountryCards;