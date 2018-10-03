const {
  NODE_ENV,
  REACT_APP_GOOGLE_API_KEY,
  REACT_APP_GRAPHQL_URL,
} = process.env;

const isProduction = NODE_ENV === 'production';

const dev = {
  graphql: {
    url: 'http://localhost:4000/',
  },
};

const prod = {
  graphql: {
    url: REACT_APP_GRAPHQL_URL,
  },
};

export default {
  ...isProduction ? prod : dev,
  /* general: */
  theme: 'standard',
  general: {
    appName: 'Movie Explorer',
    city: 'San Francisco',
  },
  images: {
    remoteUrlBase: 'https://image.tmdb.org/t/p/',
  },
  googleMaps: {
    apiKey: REACT_APP_GOOGLE_API_KEY,
  },
};
