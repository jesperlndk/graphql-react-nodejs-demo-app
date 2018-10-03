const {
  NODE_ENV,
  PORT,
  // env variables:
  API_KEY_TMDB,
  MOVIES_API_URL,
} = process.env;

const dev = {
  playground: true,
  port: 4000,
  apis: {
    movies: 'http://localhost:5000/movies',
    tmdb: `https://api.themoviedb.org/3/$PATH?api_key=${API_KEY_TMDB}&language=en-US&`,
  },
};

const prod = {
  playground: false,
  port: PORT,
  apis: {
    movies: MOVIES_API_URL,
    tmdb: `https://api.themoviedb.org/3/$PATH?api_key=${API_KEY_TMDB}&language=en-US&`,
  },
};

const isDev = NODE_ENV !== 'production';

module.exports = {
  ...isDev ? dev : prod,
  /* general: */
  path: '/',
  personTypeMap: {
    actor: ['actor_1', 'actor_2', 'actor_3'],
    writer: ['writer'],
    director: ['director'],
  },
  personNamesIgnoreList: ['N/A'],
};
