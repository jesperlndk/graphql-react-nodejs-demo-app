exports.resolver = {
  Video: {
    url: (video) => {
      if (video.site === 'YouTube') {
        return `https://www.youtube.com/watch?v=${video.key}`;
      }
      return null;
    },
  },
};
