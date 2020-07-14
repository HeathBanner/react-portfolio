import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppProvider } from './context/AuthContext';

import Home from './pages/Landing/Home';
// import Contact from './pages/Contact/Contact';

import './reset.css';

export default () => {

  return (
    <AppProvider>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/contact" component={Contact} /> */}
        </Switch> 
    </AppProvider>
  );
};