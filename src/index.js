const fastify = require("fastify")({
  logger: true,
});
require("dotenv").config();

require("./utils/mongoose");

const productRoutes = require("./routes/products.routes");

productRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  await fastify.listen(process.env.PORT);
  fastify.log.info(`Server listening on ${fastify.server.address().port}`);
};

start();
