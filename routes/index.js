var express = require("express");
const CarouselImgController = require("../controllers/carouselimg");
var router = express.Router();

const SiteModel = require("../models/Sites");

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

router.get("/sites", function (req, res) {
  SiteModel.find().then((site) => {
    console.log(site);
    if (site.length > 0) res.json(site[0]);
    else {
      res.sendStatus(400);
    }
  });
});

router.get("/carouselimgs", CarouselImgController.getCarouselImg);

module.exports = router;
