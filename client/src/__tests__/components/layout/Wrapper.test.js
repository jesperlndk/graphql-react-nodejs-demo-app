import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { MemoryRouter } from 'react-router-dom';
import styles from '../../../styles';
import config from '../../../config';
import Wrapper from '../../../components/layout/Wrapper';

describe('Wrapper component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const render = (
      <ThemeProvider theme={styles(config.theme)}>
        <MemoryRouter>
          <Wrapper />
        </MemoryRouter>
      </ThemeProvider>
    );
    ReactDOM.render(render, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
