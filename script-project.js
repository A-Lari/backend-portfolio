const mongoose = require("mongoose");
const DB_ADDRESS = "mongodb://localhost:27017/portfolio";

const Project = require("./models/Projects");

const project = [
    {
        title: "Projet1",
        summary: "résumé du projet 2",
        image: "projet1.png",
        lien_github: "https://github.com/A-Lari/frontend-portfolio",
        content: "Contenu du projet 1",
        techno: [],
        comment: [],
        likes: 0,
    },
    {
        title: "Projet2",
        summary: "résumé du projet 2",
        image: "projet2.png",
        lien_github: "https://github.com/A-Lari/frontend-portfolio",
        content: "Contenu du projet 2",
        techno: [],
        comment: [],
        likes: 0,
    }    
];

function saveProjets() {
  console.log("Projets save...");
  return Project.create(project);
}

mongoose
  .connect(DB_ADDRESS)
  .then(() => {
    console.log("connected to DB");
    saveProjets()
      .then(() => {
        console.log("PROJET CREATED");
      })
      .catch((error) => {
        console.log("PROJET NO CREATED");
        console.log(error);
      })
      .finally(() => {
        console.log("disconnecting from db");
        mongoose.disconnect();
      });
  })
  .catch((error) => console.log(error));
