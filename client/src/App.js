import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { AppProvider } from './context/AuthContext';

import Home from './pages/Landing/Home';
import Showcase from './pages/Showcase/Showcase';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Article from './components/Showcase/MtnDream/Blog/Article';
import EditorSelection from './components/Showcase/MtnDream/Editor/EditorSelection';
import Editor from './pages/Blog/Editor';

import './reset.css';

const App = () => {

  return (
    <AppProvider>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/showcase" component={Showcase} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:title" component={Article} />
            <Route path="/editor" exact component={EditorSelection} />
            <Route path="/editor/:title" component={Editor} />
        </Switch>
        
    </AppProvider>
  );
};

export default App;
