const mongoose = require("mongoose");

const databaseName = "portfolio";
const DB_URI = `mongodb://localhost:3001/${databaseName}`;

mongoose
  .connect(DB_URI)
  .catch(() => console.log("pas connected to db"))
  .then(() => console.log("connected to DB"));
