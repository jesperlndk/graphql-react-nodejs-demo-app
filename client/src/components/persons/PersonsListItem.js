import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { PersonPhoto } from '.';
import utils from '../../utils';

const PersonsListItem = ({ classes, person }) => (
  <div className={classes.item}>
    <Link to={utils.persons.getPersonUrl(person)}>
      <PersonPhoto person={person} hoverEffect />
      <span className={classes.name}>{person.name}</span>
      <span className={classes.type}>{person.type}</span>
    </Link>
  </div>
);

const styles = theme => ({
  item: {
    flex: 1,
    maxWidth: '20%',
    flexBasis: '20%',
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 40,

    ...theme.responsive.tablet({
      maxWidth: 'calc(100% / 3)',
      flexBasis: 'calc(100% / 3)',
    }),
    ...theme.responsive.mobile({
      maxWidth: '50%',
      flexBasis: '50%',
      paddingLeft: 17,
      paddingRight: 17,
    }),
  },
  name: {
    display: 'block',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
    fontWeight: theme.weights.medium,
    fontFamily: theme.fonts.heading,
    '&:hover': {
      color: theme.colors.hover,
    },
    color: theme.colors.primary,
    ...theme.responsive.mobile({
      fontSize: 16,
    }),
  },
  type: {
    display: 'block',
    textAlign: 'center',
    marginTop: 3,
    fontSize: 14,
    color: theme.colors.secondary,
  },
});

export default injectSheet(styles)(PersonsListItem);
