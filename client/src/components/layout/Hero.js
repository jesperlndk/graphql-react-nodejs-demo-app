import React from 'react';
import injectSheet from 'react-jss';

const Hero = ({ classes, children, backgroundImage }) => (
  <main className={classes.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className={classes.content}>
      {children}
    </div>
  </main>
);

const styles = theme => ({
  hero: {
    ...theme.animations.fadeIn('0s', '1.5s'),
    ...theme.mixins.backgroundImageCover(),
    position: 'relative',
    height: '99vh',
  },
  content: {
    margin: '0 auto',
    maxWidth: 1000,
    padding: '0 30px',
    position: 'relative',
    top: '43%',
    transform: 'translateY(-50%)',
    ...theme.responsive.desktop({
      maxWidth: 850,
    }),
    ...theme.responsive.tablet({
      maxWidth: 700,
    }),
    ...theme.responsive.mobile({
      maxWidth: '100%',
    }),
  },
});

export default injectSheet(styles)(Hero);
