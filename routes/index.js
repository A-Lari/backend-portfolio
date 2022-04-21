var express = require("express");
var router = express.Router();

const SiteModel = require("../models/Sites");
const ProjectModel = require("../models/Projects");

/* GET home page. */
router.get("/", function (req, res) {
  res.send("hello from API");
});

router.get("/sites/:id", function (req, res) {
  SiteModel.findById(req.params.id).then((site) => {
    console.log(site);
    res.json(site);
  });
});

router.get("/projects", (req, res) => {
  ProjectModel.find().then((projectsList) => {
    res.send(projectsList);
  });
});

module.exports = router;
