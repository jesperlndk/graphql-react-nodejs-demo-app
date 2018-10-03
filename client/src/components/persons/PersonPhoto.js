import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import utils from '../../utils';

const PersonPhoto = ({ classes, className, person = {}, hoverEffect }) => {
  const backgroundImage = person.profile && person.profile.profile_path
    ? `url(${utils.assets.getRemoteImageUrl(person.profile.profile_path)})`
    : null;

  return (
    <div
      className={classNames({
        [classes.photo]: true,
        [classes.hoverEffect]: hoverEffect,
        className: !!className,
      })}
      style={{ backgroundImage }}
    />
  );
};

const styles = theme => ({
  photo: {
    borderRadius: '50%',
    width: '100%',
    height: 'auto',
    paddingTop: '100%',
    backgroundColor: '#cecece',
    backgroundSize: 'cover',
    backgroundPosition: '50% 20%',
  },
  hoverEffect: {
    transition: 'box-shadow .2s',
    '&:hover': {
      boxShadow: theme.boxShadow.heavy,
    },
  },
});

export default injectSheet(styles)(PersonPhoto);
