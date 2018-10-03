import React from 'react';
import injectSheet from 'react-jss';
import Routes from '../routes';
import { Header, Footer } from './layout';

const App = () => (
  <React.Fragment>
    <Header />
    <Routes />
    <Footer />
  </React.Fragment>
);

const styles = theme => ({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },

    body: {
      margin: 0,
      padding: 0,
      fontFamily: `"${theme.fonts.text}", sans-serif`,
      fontSize: 16,
      fontWeight: theme.weights.regular,
      color: theme.colors.primary,
    },

    img: {
      maxWidth: '100%',
      height: 'auto',
    },

    a: {
      textDecoration: 'none',
      color: theme.colors.primary,
      '&:hover': {
        color: theme.colors.hover,
      },
    },
  },
});

export default injectSheet(styles)(App);
