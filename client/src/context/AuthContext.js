import React, { createContext } from 'react';

import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const theme = useTheme();

  const media = {
    xl: useMediaQuery(theme.breakpoints.up('lg')),
    lg: useMediaQuery(theme.breakpoints.down('lg')),
    md: useMediaQuery(theme.breakpoints.down('md')),
    sm: useMediaQuery(theme.breakpoints.down('sm')),
    xs: useMediaQuery(theme.breakpoints.down('xs'))
  };

  return (
    <AppContext.Provider
      value={media}
    >
      {children}
    </AppContext.Provider>
  );
};
