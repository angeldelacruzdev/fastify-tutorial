exports.options = {
  routePrefix: "/documentation",
  swagger: {
    info: {
      title: "Test swagger",
      description: "Testing the Fastify swagger API",
      version: "0.1.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: "localhost:3000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: "user", description: "User related end-points" },
      { name: "code", description: "Code related end-points" },
    ],
    securityDefinitions: {
      apiKey: {
        type: "apiKey",
        name: "apiKey",
        in: "header",
      },
    },
  },
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request, reply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  exposeRoute: true,
};
