const mongoose = require("mongoose");

const databaseName = "portfolio";
const DB_URI = `mongodb://localhost:27017/${databaseName}`;

mongoose
  .connect(DB_URI)
  .catch(() => console.log("pas connected to db"))
  .then(() => console.log("connected to DB"));
