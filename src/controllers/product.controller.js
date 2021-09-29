const Product = require("../models/products.model");

const getProducts = async (request, replay) => {
  try {
    const doc = await Product.find();
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
    const doc = await Product.findById(request.params.id);
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
    const doc = new Product(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateProduct = async (request, replay) => {
  try {
    const doc = await Product.findByIdAndUpdate(
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
    await Product.findByIdAndDelete(request.params.id);
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
