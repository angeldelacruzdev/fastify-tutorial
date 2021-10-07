const { Schema, model } = require("mongoose");

const TipoProductoSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("TipoProductos", TipoProductoSchema);
