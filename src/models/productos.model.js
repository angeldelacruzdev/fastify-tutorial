const { Schema, model } = require("mongoose");

const productoSchema = new Schema(
  {
    title: String,
    price: Number,
    image: String,
    description: String,
    qty: Number,
    category: String,
    tipo: {
      type: Schema.Types.ObjectId,
      refs: "TipoProductos",
    },
    proveedor: {
      type: Schema.Types.ObjectId,
      refs: "Proveedor",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Productos", productoSchema);
