import React from 'react';
import injectSheet from 'react-jss';
import { withRouter, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import config from '../../config';
import utils from '../../utils';
import { Wrapper } from '.';

const Header = ({ classes, location }) => {
  const isHomePage = location.pathname === '/';

  const logoClasses = classNames({
    [classes.logo]: true,
    [classes.logoHomePage]: isHomePage,
  });
  const navClasses = classNames({
    [classes.nav]: true,
    [classes.navHomePage]: isHomePage,
  });

  return (
    <header className={classes.header}>
      <Wrapper>
        <NavLink to="/" className={logoClasses}>
          <img src={utils.assets.getAsset(`logo-${isHomePage ? 'black' : 'white'}.svg`)} className={classes.appLogo} alt={config.general.appName} />
          <span className={classes.appTitle}>{config.general.appName}</span>
        </NavLink>
        <nav className={navClasses}>
          <NavLink to="/" exact>Discover</NavLink>
          <NavLink to="/insights" exact>Insights</NavLink>
        </nav>
      </Wrapper>
    </header>
  );
};

const styles = theme => ({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    overflow: 'hidden',
  },

  logo: {
    float: 'left',
    lineHeight: '70px',
    color: '#fff',
    ...theme.responsive.mobile({
      lineHeight: '50px',
    }),
    '&:hover': {
      color: '#fff',
    },
  },
  logoHomePage: {
    color: theme.colors.primary,
    '&:hover': {
      color: theme.colors.primary,
    },
  },

  appLogo: {
    display: 'inline-block',
    maxWidth: 18,
    marginRight: 10,
  },

  appTitle: {
    display: 'inline-block',
    fontFamily: theme.fonts.heading,
    fontWeight: theme.weights.medium,
    fontSize: 22,
    ...theme.responsive.mobile({
      display: 'none',
    }),
  },

  nav: {
    float: 'right',
    '& a': {
      display: 'block',
      float: 'left',
      padding: '0 2px',
      marginLeft: 30,
      lineHeight: '60px',
      fontWeight: theme.weights.regular,
      fontSize: 18,
      color: '#fff',
      border: 0,
      borderTop: '5px solid transparent',
      transition: 'all .3s',

      ...theme.responsive.mobile({
        lineHeight: '40px',
        fontSize: 14,
        marginLeft: 20,
      }),

      '&:first-child': {
        marginLeft: 0,
      },

      '&:hover, &.active': {
        color: theme.colors.hover,
        borderTopColor: theme.colors.hover,
      },
    },
  },
  navHomePage: {
    '& a': {
      color: theme.colors.primary,
    },
  },
});

export default withRouter(injectSheet(styles)(Header));
