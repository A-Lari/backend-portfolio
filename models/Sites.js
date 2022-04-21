const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({
  title: String,
  logo: String,
  footer: String,
  presentation_texte: String,
});

const SiteModel = mongoose.model("Site", SiteSchema);

module.exports = SiteModel;
