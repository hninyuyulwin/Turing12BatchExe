const express = require('express');
const MovieController = require("../controllers/MovieController");

const router = express.Router();

router.get("/", MovieController.getAllMovies);
router.post("/", MovieController.createMovie);
router.get("/:id", MovieController.getMovieByID);
router.put("/:id", MovieController.updateMovie);
router.delete("/:id", MovieController.deleteMovie);

module.exports = router;