import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { MemoryRouter } from 'react-router-dom';
import styles from '../../../styles';
import config from '../../../config';
import Section from '../../../components/layout/Section';

describe('Section component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const render = (
      <ThemeProvider theme={styles(config.theme)}>
        <MemoryRouter>
          <Section />
        </MemoryRouter>
      </ThemeProvider>
    );
    ReactDOM.render(render, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
