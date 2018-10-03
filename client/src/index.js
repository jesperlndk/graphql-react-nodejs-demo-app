import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components/window';
import graphql from './graphql';
import styles from './styles';
import config from './config';

import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <ApolloProvider client={graphql}>
      <ThemeProvider theme={styles(config.theme)}>
        <Router>
          <ScrollToTop>
            <Component />
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root'),
  );
};

render(App);
