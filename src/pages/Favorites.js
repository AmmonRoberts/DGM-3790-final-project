import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import CountryData from '../components/CountryData';
import React, { useEffect } from 'react';
import { useIdentityContext } from 'react-netlify-identity-gotrue';
import { useCountryContext } from '../Contexts/CountryContext';
import { useNavigate } from 'react-router-dom';


const Favorites = () => {
    const identity = useIdentityContext()
    const [matchedFavorites, setMatchedFavorites] = React.useState([])
    const { CountriesJson, favorites } = useCountryContext();
    const navigate = useNavigate()

    const handleNavChoice = (choice) => {
        navigate(`/${choice}`)
    }

    useEffect(() => {
        setMatchedFavorites(() => {
            const matches = CountriesJson.filter((country) => favorites.includes(country.id))
            return [...matches]
        })
    }, [favorites, CountriesJson])

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

    const linkStyle = {
        cursor: "pointer"
    }

    let i = 0;

    return (
        <div className="container">
            {!identity.user && (
                <Box sx={style}>
                    <h1>You need to be <Link sx={linkStyle}
                        onClick={() => handleNavChoice('login', false)}>
                        logged in </Link>
                        to view this page!</h1>
                </Box>
            )}
            {favorites.length > 0 && (
                <div className="row">{

                    matchedFavorites.map((country) => {
                        return (<CountryData key={`card${i += 1}`}
                            country={country} />);
                    })}
                </div>

            )}
            {identity.user && favorites.length === 0 && (
                <Box sx={style}>
                    <h1>You have no favorites!</h1>
                </Box>
            )}

        </div>
    )
}

export default Favorites