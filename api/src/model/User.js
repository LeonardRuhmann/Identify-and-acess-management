const mongoose = require("mongoose");

//Esse db precisa ser declarado aqui, pois ele dirá ao schema onde ficará o banco de dados
mongoose.connect("mongodb://localhost:27017/users-database");

const UserSchema = new mongoose.Schema({
  image: String,
  user: String,
  password: String,
  office: String,
  group: String,
  birthday: Date,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
