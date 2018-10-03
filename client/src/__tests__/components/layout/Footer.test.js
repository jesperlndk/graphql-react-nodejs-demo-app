import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { MemoryRouter } from 'react-router-dom';
import styles from '../../../styles';
import config from '../../../config';
import Footer from '../../../components/layout/Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const render = (
      <ThemeProvider theme={styles(config.theme)}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </ThemeProvider>
    );
    ReactDOM.render(render, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
