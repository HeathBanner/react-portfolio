import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthContext from './context/AuthContext';
import TokenStore from './lib/TokenStore';

import Home from './pages/Home/home';
import Contact from './pages/Main/Contact';
import Landing from './pages/Landing/Landing';


function App() {

  const [auth, setAuth] = useState({
    user: undefined,
    isLoaded: false,
    newStory: false,
    authToken: TokenStore.getToken(),
    onLogin: handleLogin,
    onLogout: handleLogout,
    updateLoaded: updateLoaded,
    updateDidMount: updateDidMount,
    updateNewStory: updateNewStory,
  })
  // const [validated, setValidated] = React.useState(true);
  const [didMount, setDidMount] = React.useState(false);

  function handleLogin(user, authToken) {
    TokenStore.setToken(authToken);
    setAuth({...auth, user, authToken});
    // setValidated(true);
  }
  
  function handleLogout() {
    TokenStore.clearToken();
    const user = undefined;
    const authToken = undefined;
    setAuth({...auth, user, authToken});
    return <Redirect to="/login" />;
  }

  function updateLoaded(user, isLoaded, newStory) {
    setAuth({...auth, user, isLoaded, newStory})
  }

  function updateDidMount() {
    setDidMount(false);
  }
  
  function updateNewStory(user, newStory) {
    setAuth({...auth, user, newStory});
  }

  useEffect(() => {
    // const { authToken } = auth;
    // if(!authToken){return setValidated(false)};
    if(!didMount) {
        setDidMount(true)
        fetch('/api/users/portfolio')
        .then(res => res.json())
        .then((user) => {
          // if(!user._id){console.log('NOT USER'); return setValidated(false)}
          const isLoaded = true;
          return setAuth({...auth, user, isLoaded})
        })
        .catch(err => { return });
    }

    if((auth.newStory)&&(!auth.isLoaded)) {
      console.log('REFRESHING AUTH')
      fetch('/api/users/portfolio')
      .then(res => res.json())
      .then((user) => {
        // if(!user._id){console.log('NOT USER'); return setValidated(false)}
        const isLoaded = true;
        console.log('IS LOADED');
        return setAuth({...auth, user, isLoaded})
      })
      .catch(err => console.log(err));
    }
  });

  return (
    <AuthContext.Provider value={auth}>
      <div className="App">
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/showcase" component={Home} />
            <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
