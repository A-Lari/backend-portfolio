var express = require("express");
var router = express.Router();

const SiteModel = require("../models/Sites");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("hello from API");
});

router.get("/sites/:id", function (req, res, next) {
  SiteModel.findById(req.params.id).then((site) => {
    console.log(site);
    res.json(site);
  });
});

module.exports = router;
