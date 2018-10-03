import React from 'react';
import injectSheet from 'react-jss';
import { BarLoader } from 'react-spinners';

const LoadingIndicator = ({ classes, height = 100 }) => (
  <div className={classes.loader} style={{ height }}>
    <BarLoader
      loading
      sizeUnit="px"
      width={100}
      height={3}
      color="#3e3e3e"
    />
  </div>
);

const styles = theme => ({
  loader: {
    ...theme.animations.fadeIn(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default injectSheet(styles)(LoadingIndicator);
