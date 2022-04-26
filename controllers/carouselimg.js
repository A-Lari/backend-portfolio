const CarouselImgModel = require("../models/CarouselImg");

const CarouselImgController = {
  getCarouselImg(req, res) {
    CarouselImgModel.find().then((carousels) => {
      res.send(carousels);
    });
  },
};

module.exports = CarouselImgController;
