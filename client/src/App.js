import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppProvider } from './context/AuthContext';

import Showcase from './pages/Showcase/Showcase';
import Contact from './pages/Contact/Contact';
import Landing from './pages/Landing/Landing';

import './reset.css';

const App = () => {

  return (
    <AppProvider>

        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/showcase" component={Showcase} />
            <Route path="/contact" component={Contact} />
        </Switch>
        
    </AppProvider>
  );
};

export default App;
