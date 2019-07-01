import React from 'react';

const AuthContext = React.createContext({
  user: undefined,
  socket: undefined,
  isLoaded: false,
  newStory: false,
  authToken: undefined,
  onLogin: () => undefined,
  onLogout: () => undefined,
  updateLoaded: () => undefined,
  updateDidMount: () => undefined,
});

export default AuthContext;
