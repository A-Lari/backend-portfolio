var express = require('express');
var router = express.Router();

const projectController = require('../controllers/projects')

/* GET projects listing. */
router.get("/", projectController.getProjects);

module.exports = router;
