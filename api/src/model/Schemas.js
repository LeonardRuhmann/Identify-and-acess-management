const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Esse db precisa ser declarado aqui, pois ele dirá ao schema onde ficará o banco de dados
mongoose.connect("mongodb://localhost:27017/users-database");

const UserSchema = new Schema({
  image: String,
  user: String,
  password: String,
  office: String,
  group: String,
  birthday: Date,
});

const ToDoSchema = new Schema({
  userId: String,
  title: String,
  description: String,
  date: Date,
  fineshed: Boolean,
});

const User = mongoose.model("User", UserSchema);
const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = { User, ToDo };
