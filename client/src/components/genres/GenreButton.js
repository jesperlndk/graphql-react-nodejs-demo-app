import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import utils from '../../utils';

const GenreButton = ({ classes, id, name, className }) => {
  const color = utils.misc.getRandomColor(name);
  return (
    <Link to={`/genre/${id}`} className={classNames(classes.button, className)}>
      <span className={classes.text} style={{ borderLeftColor: color }}>{name}</span>
    </Link>
  );
};

const styles = theme => ({
  button: {
    display: 'inline-block',
    borderColor: '#dedede',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    textDecoration: 'none',
    overflow: 'hidden',
    transition: 'box-shadow .2s',
    '&:hover': {
      boxShadow: theme.boxShadow.light,
    },
  },
  text: {
    display: 'inline-block',
    padding: '12px 20px 12px 22px',
    border: 0,
    borderLeftWidth: 6,
    borderStyle: 'solid',
    fontFamily: theme.fonts.heading,
    color: theme.colors.primary,
    '&:hover': {
      color: theme.colors.hover,
    },
    ...theme.responsive.mobile({
      padding: '10px 16px 10px 18px',
      fontSize: 15,
    }),
  },
});

export default injectSheet(styles)(GenreButton);
