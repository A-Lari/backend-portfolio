var express = require("express");
var router = express.Router();

const projectController = require("../controllers/projects");

const { checkAuth } = require("./checkAuth");

/* GET projects listing. */

router.get("/search/:title", projectController.searchByTitle);
router.get("/", projectController.getProjects);
router.get("/:idProject", projectController.getProject);

router.post("/:idProject/likes", projectController.addLikes);
router.post("/", checkAuth, projectController.createProject);

module.exports = router;
