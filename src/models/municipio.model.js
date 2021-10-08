const { Schema, model } = require("mongoose");

const MunicipioSchema = new Schema(
  {
    name: String,
    provincia: {
      type: Schema.Types.ObjectId,
      refs: "Provincia",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Municipio", MunicipioSchema);
