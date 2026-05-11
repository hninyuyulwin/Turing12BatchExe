const ReviewController = require("../controllers/ReviewController");
const express = require("express");
const router = express.Router();

router.get("/movies/:movieId", ReviewController.getAllReviewsByMovieId);
router.post("/", ReviewController.saveReview);
router.put("/:id", ReviewController.updateReview);
router.delete("/:id", ReviewController.deleteReview);

module.exports = router;
 