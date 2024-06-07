const express = require("express");
const UserRoutes = require("./src/router/userRoutes.js");
const ToDoRouter = require("./src/router/ToDosRoutes.js");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/user", UserRoutes);
app.use("/todos", ToDoRouter);

app.listen(port, () => {
  console.log("The server has been conected successufully");
});
