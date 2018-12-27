const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.createUpdate)

// Matches with "/api/articles/:id"
router.route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.removeOne)

  // Matches with "/api/articles/deleteall"
router.route("/deleteall")
   .delete(articlesController.removeAll)

module.exports = router
