const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
  title: String,
  summary: String,
  image: String,
  lien_github: String,
  content: String,
  techno: [],
  comment: [],
  likes: Number,
});

const ProjectModel = mongoose.model("Project", ProjectsSchema);

module.exports = ProjectModel;
