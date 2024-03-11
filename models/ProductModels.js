const mongoose = require("mongoose");

// Composition d'un schéma mongoDb

const ProductsModel = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,

});

module.exports = mongoose.model("products", ProductsModel, "Products");
