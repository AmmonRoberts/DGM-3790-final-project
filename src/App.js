import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import NetlifyIdentityContext from 'react-netlify-identity-gotrue';
import { Route, Switch } from 'react-router-dom';
import CountryData from './components/CountryData';
import NavMenu from './components/nav/NavMenu';
import Spinner from './components/Spinner';
import { CountryContextProvider } from './Contexts/CountryContext';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import './Styles/App.css';

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
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/countries" exact>
                <CountryCards />
              </Route>
              <Route path="/countries/:countryId">
                <CountryData />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </CountryContextProvider>
      </NetlifyIdentityContext>
    </div>
  );
}

export default App;
