const fastify = require("fastify")({
  logger: true,
});
require("dotenv").config();

require("./utils/mongoose");

const swagger = require("./utils/swagger");
fastify.register(require("fastify-swagger"), swagger.options);

const productRoutes = require("./routes/products.routes");
const frutasRoutes = require("./routes/frutas.routes");
const clientesRoutes = require("./routes/clientes.routes");

productRoutes.forEach((route) => fastify.route(route));
frutasRoutes.forEach((route) => fastify.route(route));
clientesRoutes.forEach((route) => fastify.route(route));

const start = async () => {
  await fastify.listen(process.env.PORT);
  fastify.log.info(`Server listening on ${fastify.server.address().port}`);
};

start();
