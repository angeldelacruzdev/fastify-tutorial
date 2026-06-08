const objectId = { type: "string", pattern: "^[0-9a-fA-F]{24}$" };

const listResponse = (items) => ({
  type: "object",
  properties: {
    ok: { type: "boolean" },
    data: { type: "array", items },
  },
});

const getResponse = (item) => ({
  type: "object",
  properties: {
    ok: { type: "boolean" },
    data: item,
  },
});

const idParams = {
  type: "object",
  properties: { id: objectId },
  required: ["id"],
};

exports.pais = {
  tag: "Paises",
  entity: {
    type: "object",
    properties: { name: { type: "string" } },
    required: ["name"],
  },
  schema: {
    body: {
      type: "object",
      properties: { name: { type: "string" } },
      required: ["name"],
    },
    list: listResponse({ type: "object", properties: { _id: objectId, name: { type: "string" } } }),
    get: getResponse({ type: "object", properties: { _id: objectId, name: { type: "string" } } }),
  },
};

exports.provincia = {
  tag: "Provincias",
  entity: {
    type: "object",
    properties: {
      name: { type: "string" },
      pais: objectId,
    },
    required: ["name", "pais"],
  },
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        pais: objectId,
      },
      required: ["name", "pais"],
    },
    list: listResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, pais: objectId } }),
    get: getResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, pais: objectId } }),
  },
};

exports.municipio = {
  tag: "Municipios",
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        provincia: objectId,
      },
      required: ["name", "provincia"],
    },
    list: listResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, provincia: objectId } }),
    get: getResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, provincia: objectId } }),
  },
};

exports.distrito = {
  tag: "Distritos",
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        municipio: objectId,
      },
      required: ["name", "municipio"],
    },
    list: listResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, municipio: objectId } }),
    get: getResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, municipio: objectId } }),
  },
};

exports.sector = {
  tag: "Sectores",
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        distrito: objectId,
      },
      required: ["name", "distrito"],
    },
    list: listResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, distrito: objectId } }),
    get: getResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, distrito: objectId } }),
  },
};

exports.sucursal = {
  tag: "Sucursales",
  schema: {
    body: {
      type: "object",
      properties: { name: { type: "string" } },
      required: ["name"],
    },
    list: listResponse({ type: "object", properties: { _id: objectId, name: { type: "string" } } }),
    get: getResponse({ type: "object", properties: { _id: objectId, name: { type: "string" } } }),
  },
};

exports.proveedor = {
  tag: "Proveedores",
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
      },
      required: ["name"],
    },
    list: listResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, description: { type: "string" } } }),
    get: getResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, description: { type: "string" } } }),
  },
};

exports.tipoProducto = {
  tag: "Tipo Productos",
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
      },
      required: ["name"],
    },
    list: listResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, description: { type: "string" } } }),
    get: getResponse({ type: "object", properties: { _id: objectId, name: { type: "string" }, description: { type: "string" } } }),
  },
};

exports.producto = {
  tag: "Productos",
  schema: {
    body: {
      type: "object",
      properties: {
        title: { type: "string" },
        price: { type: "number" },
        image: { type: "string" },
        description: { type: "string" },
        qty: { type: "number" },
        category: { type: "string" },
        tipo: objectId,
        proveedor: objectId,
      },
      required: ["title", "price"],
    },
    list: listResponse({
      type: "object",
      properties: {
        _id: objectId,
        title: { type: "string" },
        price: { type: "number" },
        image: { type: "string" },
        description: { type: "string" },
        qty: { type: "number" },
        category: { type: "string" },
      },
    }),
    get: getResponse({
      type: "object",
      properties: {
        _id: objectId,
        title: { type: "string" },
        price: { type: "number" },
        image: { type: "string" },
        description: { type: "string" },
        qty: { type: "number" },
        category: { type: "string" },
      },
    }),
  },
};

exports.cliente = {
  tag: "Clientes",
  schema: {
    body: {
      type: "object",
      properties: {
        nombre: { type: "string" },
        cedula: { type: "number" },
        telefono: { type: "string" },
        direccion: { type: "string" },
      },
      required: ["nombre"],
    },
    list: listResponse({
      type: "object",
      properties: {
        _id: objectId,
        nombre: { type: "string" },
        cedula: { type: "number" },
        telefono: { type: "string" },
        direccion: { type: "string" },
      },
    }),
    get: getResponse({
      type: "object",
      properties: {
        _id: objectId,
        nombre: { type: "string" },
        cedula: { type: "number" },
        telefono: { type: "string" },
        direccion: { type: "string" },
      },
    }),
  },
};

exports.idParams = idParams;
