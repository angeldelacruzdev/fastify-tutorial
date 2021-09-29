const { Schema, model } = require("mongoose");

const frutaSchema = new Schema(
  {
    name: String,
    price: Number,
    image: String,
    description: String,
    qty: Number,
    category: [],
    format: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Fruta", frutaSchema);
