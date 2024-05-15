const mongoose = require("mongoose");

//Esse db precisa ser declarado aqui, pois ele dirá ao schema onde ficará o banco de dados
mongoose.connect("mongodb://localhost:27017/users");

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
