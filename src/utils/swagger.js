exports.options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Node.js Fastify Mongodb API",
      description:
        "Fastify is proudly powering a large ecosystem of organisations and products out there.",
      version: "0.0.1",
    },
    extenalDocs: {
      url: "https://swagger.io",
      description: "find more info here",
    },
  },
  host: "localhost:3000",
  schemas: ["http"],
  cosumes: ["application/json"],
  produces: ["application/json"],
};
