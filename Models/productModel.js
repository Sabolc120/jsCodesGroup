const mongoose = require("mongoose");

const productScheme = new mongoose.Schema(
  {
    nev: {
      type: String,
      required: [true, "A termék nevét kötelező megadni!"],
    },
    termektipus: {
      type: String,
    },
    ar: {
      type: String,
      required: [true, "A termék árának megadása kötelező!"],
    },
    kepcim: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("products", productScheme);

module.exports = productModel;