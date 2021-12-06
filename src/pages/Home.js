import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import React from 'react';
import { useIdentityContext } from 'react-netlify-identity-gotrue';
import { useHistory } from 'react-router-dom';


const Home = () => {
    const identity = useIdentityContext()
    const history = useHistory()

    const handleNavChoice = (choice) => {
        history.push(`/${choice}`)
    }

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

    return (
        <Box sx={style}>
            {!identity.provisionalUser && !identity.user && (
                <h1>Welcome! Please
                    <Link onClick={() => handleNavChoice('login', false)}>
                        {' '}log in{' '}
                    </Link>
                    or
                    <Link
                        onClick={() => handleNavChoice('signup', false)}>
                        {' '}sign up{' '} </Link>
                    to continue.</h1>
            )}

            {identity.provisionalUser && (
                <h1>Thanks for signing up! Check your email to confirm.</h1>
            )}

            {identity.user && (
                <h1>Welcome back, {identity.user.user_metadata?.full_name}!</h1>
            )}
        </Box>
    )
}

export default Home