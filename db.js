const mongoose = require("mongoose");

const databaseName = "portfolio";
const MONGO_URL = `${process.env.MONGO_URL}/${databaseName}`;

if (!process.env.MONGO_URL) {
  console.log("pas de mongo");
  process.exit(1);
}
mongoose
  .connect(MONGO_URL)
  .catch(() => console.log("pas connected to db"))
  .then(() => console.log("connected to DB"));
