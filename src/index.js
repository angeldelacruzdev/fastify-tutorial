const fastify = require("fastify")({
  logger: true,
});
require("dotenv").config();

require("./utils/mongoose");

const swagger = require("./utils/swagger");
fastify.register(require("@fastify/swagger"), swagger.swaggerOptions);
fastify.register(require("@fastify/swagger-ui"), swagger.uiOptions);

const start = async () => {
  await fastify.register(async function (instance) {
    const paisesRoutes = require("./routes/paises.routes");
    const provinciaRoutes = require("./routes/provincias.routes");
    const municipioRoutes = require("./routes/municipio.routes");
    const distritoRoutes = require("./routes/distrito.routes");
    const sectorRoutes = require("./routes/sectores.routes");
    const sucursalRoutes = require("./routes/sucursal.routes");
    const proveedorRoutes = require("./routes/proveedores.routes");
    const productRoutes = require("./routes/productos.routes");
    const tipoProductosRoutes = require("./routes/tipoProductos.routes");
    const clientesRoutes = require("./routes/clientes.routes");

    paisesRoutes.forEach((route) => instance.route(route));
    provinciaRoutes.forEach((route) => instance.route(route));
    municipioRoutes.forEach((route) => instance.route(route));
    distritoRoutes.forEach((route) => instance.route(route));
    sectorRoutes.forEach((route) => instance.route(route));
    sucursalRoutes.forEach((route) => instance.route(route));
    proveedorRoutes.forEach((route) => instance.route(route));
    productRoutes.forEach((route) => instance.route(route));
    tipoProductosRoutes.forEach((route) => instance.route(route));
    clientesRoutes.forEach((route) => instance.route(route));
  });

  await fastify.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });
  fastify.log.info(`Server listening on ${fastify.server.address().port}`);
};

start();
