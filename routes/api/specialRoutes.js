const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles/deleteall"
router.route("/")
   .delete(articlesController.removeAll)

module.exports = router