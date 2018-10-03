import utils from '../../utils';

const fonts = {
  heading: 'Titillium Web',
  text: 'Titillium Web',
};

const weights = {
  light: 200,
  regular: 300,
  medium: 400,
  bold: 600,
};

const colors = {
  primary: '#000',
  secondary: '#3e3e3e',
  backgroundAlternative: '#f8f8f9',
  hover: '#2568e2',
};

const boxShadow = {
  light: '0 0 5px 0px rgba(34, 34, 34, 0.2)',
  heavy: '0 0 9px 0px rgba(34, 34, 34, 0.4)',
};

const button = {
  display: 'inline-block',
  marginTop: 10,
  fontFamily: fonts.heading,
  fontWeight: weights.bold,
  fontSize: 16,
  textDecoration: 'none',
  '& span': {
    display: 'inline-block',
    height: 18,
    lineHeight: '20px',
    paddingRight: 40,
    background: `url(${utils.assets.getAsset('arrow_right-white.svg')}) 95% center no-repeat`,
    backgroundSize: '20px',
    transition: 'all .3s',
  },
  '&:hover span': {
    backgroundPosition: '100% center',
  },
};

export default {
  fonts,
  weights,
  colors,
  boxShadow,

  buttons: {
    black: {
      extend: button,
      padding: '9px 15px',
      color: '#fff',
      backgroundColor: colors.primary,
      '&:hover': {
        backgroundColor: colors.hover,
        color: '#fff',
      },
    },
    white: {
      extend: button,
      color: colors.primary,
      fontWeight: weights.bold,
      '& span': {
        backgroundImage: `url(${utils.assets.getAsset('arrow_right-black.svg')})`,
      },
    },
  },
};
