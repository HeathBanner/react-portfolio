import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/home';
import Social from './pages/Social/Social';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthContext from './context/AuthContext';
import Settings from './pages/Social/Settings';
import FindFriends from './pages/Social/FindFriends';
import Profile from './pages/Social/Profile';
import Chat from './pages/Chat/Chat';
import About from './pages/Main/About';
import Contact from './pages/Main/Contact';

import TokenStore from './lib/TokenStore';

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
          setAuth({...auth, user, isLoaded})
        })
        .catch(err => { return });
        return
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
      {/* {!validated ? <Redirect to="/login" /> : ''} */}
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/social" exact component={Social} />
            <Route path="/social/:handle" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/settings" component={Settings} />
            <Route path="/findFriends" component={FindFriends} />
            <Route path="/chat" component={Chat} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
