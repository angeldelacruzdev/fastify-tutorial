const Productos = require("../models/productos.model");
const TipoProductoSchema = require("../models/tipo_productos.model");
const getProducts = async (request, replay) => {
  try {
    const doc = await Productos.find()
      .populate("tipo", "name", "TipoProductos")
      .populate("proveedor", "", "Proveedor")
      .exec();
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getProduct = async (request, replay) => {
  try {
    const doc = await Productos.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createProduct = async (request, replay) => {
  try {
    const data = request.body;

    const doc = new Productos(data);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateProduct = async (request, replay) => {
  try {
    const doc = await Productos.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      }
    );
    replay.code(200).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const deleteProduct = async (request, replay) => {
  try {
    await Productos.findByIdAndDelete(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
