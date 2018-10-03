import React from 'react';
import injectSheet from 'react-jss';

const Wrapper = ({ classes, children }) => (
  <div className={classes.wrapper}>
    {children}
  </div>
);

const styles = theme => ({
  wrapper: {
    margin: '0 auto',
    maxWidth: 1200,
    padding: '0 40px',

    ...theme.responsive.tablet({
      padding: '0 30px',
    }),
    ...theme.responsive.mobile({
      padding: '0 20px',
    }),
  },
});

export default injectSheet(styles)(Wrapper);
