const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/users-database");

db.then(() => {
  console.log("Conexão feita com sucesso!");
}).catch((error) => {
  console.error("error de conexão" + error);
});

module.exports = db;
