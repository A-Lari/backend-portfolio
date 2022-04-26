const mongoose = require("mongoose");

const databaseName = "portfolio";
const MONGO_URL = `${process.env.MONGO_URL}${databaseName}`;

mongoose
  .connect(MONGO_URL)
  .catch(() => console.log("pas connected to db"))
  .then(() => console.log("connected to DB"));
