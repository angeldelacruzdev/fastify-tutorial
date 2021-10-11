const { Schema, model } = require("mongoose");

const DistritoSchema = new Schema(
  {
    name: String,
    municipio: {
      type: Schema.Types.ObjectId,
      refs: "Municipio",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Distrito", DistritoSchema);
