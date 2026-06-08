exports.swaggerOptions = {
  openapi: {
    info: {
      title: "Test swagger",
      description: "Testing the Fastify swagger API",
      version: "0.1.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    tags: [
      { name: "Paises", description: "Paises end-points" },
      { name: "Provincias", description: "Provincias end-points" },
      { name: "Municipios", description: "Municipios end-points" },
      { name: "Distritos", description: "Distritos end-points" },
      { name: "Sectores", description: "Sectores end-points" },
      { name: "Sucursales", description: "Sucursales end-points" },
      { name: "Proveedores", description: "Proveedores end-points" },
      { name: "Tipo Productos", description: "Tipo de productos end-points" },
      { name: "Productos", description: "Productos end-points" },
      { name: "Clientes", description: "Clientes end-points" },
    ],
    components: {
      securitySchemes: {
        apiKey: {
          type: "apiKey",
          name: "apiKey",
          in: "header",
        },
      },
    },
  },
};

exports.uiOptions = {
  routePrefix: "/documentation",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
};
