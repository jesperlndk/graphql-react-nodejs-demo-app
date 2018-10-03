export default {
  backgroundImageCover: (bgImage = '', position = 'top center') => ({
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: position,
    backgroundSize: 'cover',
  }),
};
