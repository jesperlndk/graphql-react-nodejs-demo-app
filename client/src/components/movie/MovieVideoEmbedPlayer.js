import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const MovieVideoEmbedPlayer = ({ classes, className, video }) => {
  if (!video) {
    return null;
  }

  return (
    <div className={classNames(classes.player, className)}>
      <iframe
        title={video.name}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="360"
        src={`https://www.youtube.com/embed/${video.key}?autoplay=0&rel=0`}
        frameBorder="0"
      />
    </div>
  );
};

const styles = () => ({
  player: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    '& *': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  },
});

export default injectSheet(styles)(MovieVideoEmbedPlayer);
