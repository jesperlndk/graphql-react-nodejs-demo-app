const jsonServer = require('json-server');

const { NODE_ENV, PORT } = process.env;

const config = {
  isDev: NODE_ENV !== 'production',
  port: PORT || 5000,
  file: 'data.json',
  id: 'slug',
};

const server = jsonServer.create();
const router = jsonServer.router(config.file);
router.db._.id = config.id;

const middlewares = jsonServer.defaults({
  logger: config.isDev,
  readOnly: true,
});

server.use(middlewares);
server.use(router);
server.listen(config.port, () => {
  console.log(`🚀 API (JSON Server) ready at http://localhost:${config.port}`);
});
