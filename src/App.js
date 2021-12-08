import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import NetlifyIdentityContext from 'react-netlify-identity-gotrue';
import { Route } from "react-router-dom";
import CountryData from './components/CountryData';
import NavMenu from './components/nav/NavMenu';
import Spinner from './components/Spinner';
import { CountryContextProvider } from './Contexts/CountryContext';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import './Styles/App.css';
import SlideRoutes from 'react-slide-routes';

const CountryCards = React.lazy(() => import('./components/CountryCards'))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}


const App = () => {
  return (
    <div id="main-div" className='App'>
      <NetlifyIdentityContext url='https://ammonroberts-dgm3790finalproject.netlify.app/'>
        <CountryContextProvider>
          <NavMenu />
          <Suspense
            fallback={
              <Box sx={style}>
                <Spinner />
              </Box>
            }
          >
            <SlideRoutes>
              <Route path="/" element={<Home />} exact />
              <Route path="/countries" element={<CountryCards />} exact />
              <Route path="/favorites" element={<Favorites />} exact />
              <Route path="/countries/:countryId" element={<CountryData />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </SlideRoutes>
          </Suspense>
        </CountryContextProvider>
      </NetlifyIdentityContext>
    </div >
  );
}

export default App;
