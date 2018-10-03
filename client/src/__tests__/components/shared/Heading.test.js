import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'react-jss';
import styles from '../../../styles';
import config from '../../../config';
import Heading from '../../../components/shared/Heading';

describe('Heading component', () => {
  it('should render empty h1 tag by default', () => {
    const render = (
      <ThemeProvider theme={styles(config.theme)}>
        <Heading />
      </ThemeProvider>
    );
    const tree = renderer.create(render).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render text and sub-text inside if given', () => {
    const render = (
      <ThemeProvider theme={styles(config.theme)}>
        <Heading text="My headline" sub="My sub-headline" />
      </ThemeProvider>
    );
    const tree = renderer.create(render).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should add class to heading tag if any className given', () => {
    const render = (
      <ThemeProvider theme={styles(config.theme)}>
        <Heading type="h2" text="My headline" className="my-fancy-custom-class" />
      </ThemeProvider>
    );
    const tree = renderer.create(render).toJSON();
    expect(tree.props.className).toContain('my-fancy-custom-class');
  });
});
