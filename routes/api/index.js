const app = require("express")
const router = require("express").Router();
const articleRoutes = require("./articleRoutes");
const newsRoutes = require("./nasaNewsRoutes");

// Article routes

// Matches with "/api/articles"
router.use("/articles", articleRoutes);

// Matches with "/api/scrapArtilces"
router.use("/scrapArtilces", newsRoutes);

module.exports = router;
