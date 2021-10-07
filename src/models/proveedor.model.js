const { Schema, model } = require("mongoose");

const ProveedorSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Proveedor", ProveedorSchema);
