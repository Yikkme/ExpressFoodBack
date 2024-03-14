const mongoose = require("mongoose");
const DelivererModels = require("./DelivererModels");

// Composition d'un schéma mongoDb

const OrdersModel = new mongoose.Schema({
  id: String,
  date: Date,
  totalprice: Number,
  email: String,
  deliverer: { type: mongoose.Schema.Types.ObjectId, ref: "Deliverer" },
});

module.exports = mongoose.model("orders", OrdersModel, "Orders");
