# Fastify - Supermarket API

REST API for a supermarket management system built with Fastify and MongoDB.

## Stack

- **Runtime:** Node.js 22+
- **Framework:** Fastify 5
- **Database:** MongoDB + Mongoose 9
- **Documentation:** Swagger/OpenAPI 3 (@fastify/swagger + @fastify/swagger-ui)
- **Dev:** Nodemon

## Entities

| Entity        | Endpoint             | Description                     |
|---------------|----------------------|---------------------------------|
| Paises        | `/paises`            | Country catalog                 |
| Provincias    | `/provincias`        | Provinces by country            |
| Municipios    | `/municipios`        | Municipalities by province      |
| Distritos     | `/distritos`         | Districts by municipality       |
| Sectores      | `/sectores`          | Sectors by district             |
| Sucursales    | `/sucursales`        | Branches                        |
| Proveedores   | `/proveedores`       | Suppliers                       |
| Productos     | `/products`          | Products catalog                |
| TipoProductos | `/tipo-productos`    | Product types                   |
| Clientes      | `/clientes`          | Customers                       |

All entities expose full CRUD operations (GET, GET/:id, POST, PUT, DELETE).

## How to run

### Locally

```bash
# Install dependencies
npm install

# Configure environment variables
# Create a .env file with:
#   MONGO_DB=mongodb://localhost:27017/fastify-tutorial
#   PORT=3000

# Start in dev mode (with Nodemon)
npm run dev
```

### With Docker

```bash
# Start both the app and MongoDB
docker compose up -d

# Rebuild after code changes
docker compose up -d --build app
```

## Documentation

Once the server is running:

- **Swagger UI:** http://localhost:3000/documentation
- **OpenAPI JSON:** http://localhost:3000/documentation/json
