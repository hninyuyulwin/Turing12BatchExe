const ReviewService = require("../services/ReviewService");

async function getAllReviewsByMovieId(req, res) {
  let movieId = req.params.movieId;
  try {
    const reviews = await ReviewService.getAllReviewsByMovieId(movieId);
    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function saveReview(req, res) { 
  let review = req.body;
  try {
    const savedReview = await ReviewService.saveReview(review);
    res.json(savedReview);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function updateReview(req, res) {
  let review = req.body;
  let id = req.params.id;
  try {
    const updatedReview = await ReviewService.updateReview(id,review);
    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function deleteReview(req, res) {
  let id = req.params.id;     
  try {
    const deletedReview = await ReviewService.deleteReview(id);
    res.json(deletedReview);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  getAllReviewsByMovieId,
  saveReview,
  updateReview,
  deleteReview
};
