const fastify = require("fastify")({
  logger: true,
});
require("dotenv").config();

require("./utils/mongoose");

const swagger = require("./utils/swagger");
fastify.register(require("fastify-swagger"), swagger.options);

const paisesRoutes = require("./routes/paises.routes");
const provinciaRoutes = require("./routes/provincias.routes");
const sectorRoutes = require("./routes/sectores.routes");
const sucursalRoutes = require("./routes/sucursal.routes");
const proveedorRoutes = require("./routes/proveedores.routes");
const productRoutes = require("./routes/productos.routes");
const tipoProductosRoutes = require("./routes/tipoProductos.routes");
const clientesRoutes = require("./routes/clientes.routes");

paisesRoutes.forEach((route) => fastify.route(route));
provinciaRoutes.forEach((route) => fastify.route(route));
sectorRoutes.forEach((route) => fastify.route(route));
sucursalRoutes.forEach((route) => fastify.route(route));
proveedorRoutes.forEach((route) => fastify.route(route));
productRoutes.forEach((route) => fastify.route(route));
tipoProductosRoutes.forEach((route) => fastify.route(route));
clientesRoutes.forEach((route) => fastify.route(route));

const start = async () => {
  await fastify.listen(process.env.PORT || 3000);
  fastify.log.info(`Server listening on ${fastify.server.address().port}`);
};

start();
