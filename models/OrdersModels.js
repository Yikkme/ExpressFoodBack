const mongoose = require("mongoose");

// Composition d'un schéma mongoDb

const OrdersModel = new mongoose.Schema({
  id: String,
  date: Date,
  price: Number,
});

module.exports = mongoose.model("orders", OrdersModel, "Orders");
