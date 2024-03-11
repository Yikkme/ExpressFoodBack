const mongoose = require("mongoose");

// Composition d'un schéma mongoDb

const CommandsModel = new mongoose.Schema({
  id: String,
  date: Date,
  price: Number,

});

module.exports = mongoose.model("commands", CommandsModel, "Commands");
