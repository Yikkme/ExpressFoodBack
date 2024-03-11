const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Composition d'un schéma mongoDb

const UsersModel = new mongoose.Schema({
  lastname: String,
  firstname: String,
  email: String,
  password: String,
  role: { type: String, default: "client" },
  address: String,

});

UsersModel.pre("save", async function () {
  const salt = await bcrypt.genSalt(12)
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("users", UsersModel, "Users");
