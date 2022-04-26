var express = require("express");
const CarouselImgController = require("../controllers/carouselimg");
const TechnosController = require("../controllers/technos");
var router = express.Router();

const SiteModel = require("../models/Sites");

const dataSite = {
  title: "My Portfolio",
  logo: "devimg.jpg",
  footer: "2022 - MyPortfolio.com",
  presentation_titre: "Bienvenue sur mon portfolio",
  presentation_sum: "Découvrez l'ensemble de mes projets\net mes skills de développeur web",
  background_img: "backgroundsite.jpg"
};

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
      //On créé les documents pour le site
      SiteModel.create(dataSite)
        .then((result) => {
          console.log(result);
          res.sendStatus(201);
        })
        .catch(() => res.sendStatus(500));
    }
  });
});

router.get("/carouselimgs", CarouselImgController.getCarouselImg);
router.post("/carouselimgs", CarouselImgController.createCarouselImg);
router.get("/technos", TechnosController.getTecnos);
router.post("/technos", TechnosController.createTecnos);

module.exports = router;
