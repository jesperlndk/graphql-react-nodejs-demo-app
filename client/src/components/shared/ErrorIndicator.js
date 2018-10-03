import React from 'react';
import injectSheet from 'react-jss';
import utils from '../../utils';

const TEXT_DEFAULT = 'An unexpected error happened. Please try again later.';

const ErrorIndicator = ({ classes, height = 120, textColor = 'black', backgroundColor = 'white', text = TEXT_DEFAULT }) => (
  <div className={classes.error} style={{ height, backgroundColor }}>
    <img src={utils.assets.getAsset(`alert_triangle-${textColor}.svg`)} alt="Error" />
    <span className={classes.text} style={{ color: textColor }}>{text}</span>
  </div>
);

const styles = theme => ({
  error: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    display: 'block',
    fontWeight: theme.weights.light,
    marginTop: 15,
    textAlign: 'center',
  },
});

export default injectSheet(styles)(ErrorIndicator);
