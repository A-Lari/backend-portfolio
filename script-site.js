const mongoose = require("mongoose");
const DB_ADDRESS = "mongodb://localhost:27017/portfolio";

const Site = require("./models/Sites");

var ObjectID = mongoose.ObjectID;
const idtest = ObjectID("1234");
console.log(idtest);

const site = {
    title: "mon site",
    logo: "logo1.png",
    footer: "@portfolio 2022",
    presentation_texte: "Bienvenue sur mon site de projets",
  };

function saveSite() {
  console.log("Save Site...");
  return Site.create(site);
}

mongoose
  .connect(DB_ADDRESS)
  .then(() => {
    console.log("connected to DB");
    saveSite()
      .then(() => {
        console.log("SITE CREATED");
      })
      .catch((error) => {
        console.log("SITE NO CREATED");
        console.log(error);
      })
      .finally(() => {
        console.log("disconnecting from db");
        mongoose.disconnect();
      });
  })
  .catch((error) => console.log(error));
