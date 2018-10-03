import React from 'react';
import injectSheet from 'react-jss';
import { Wrapper } from '.';

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <Wrapper>
      Disclaimer:<br />
      All displayed information on this website is respectively owned and published by <a href="https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am">sfgov.org</a> and <a href="https://developers.themoviedb.org/3">themoviedb.org</a>.<br />
      This website is solely the result of a &#x22;coding challenge&#x22;, created as a part of an interview process.<br />
      Creator: <a href="https://jesperln.dk/">Jesper Lund</a>.<br />
    </Wrapper>
  </footer>
);

const styles = theme => ({
  footer: {
    background: theme.colors.primary,
    color: '#c0c0c0',
    fontSize: 13,
    fontWeight: theme.weights.light,
    lineHeight: 1.5,
    padding: '80px 0',
    textAlign: 'center',

    ...theme.responsive.tablet({
      padding: '70px 0',
    }),
    ...theme.responsive.tablet({
      padding: '55px 0',
    }),

    '& a': {
      color: '#fff',
    },
  },
});

export default injectSheet(styles)(Footer);
