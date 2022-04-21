const ProjectModel = require("../models/Projects");

const projectController = {

  getProjects(req, res) {
    ProjectModel.find().then((projectsList) => {
      res.send(projectsList);
    })
  },

}

module.exports = projectController;
