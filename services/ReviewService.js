const Review = require("../model/Review");
const Movie = require("../model/Movie");
const mongoose = require("mongoose");

async function getAllReviewsByMovieId(movieId) {
  return await Review.find({
    movie: movieId,
  }).populate("movie");
}

async function saveReview(review) {
  let movie = await Movie.findById(review.movie);
  if (!movie) {
    throw new Error("Movie not found with id " + review.movie);
  }
  review.movie = new mongoose.Types.ObjectId(review.movie);
  let newReview = new Review(review);
  return await newReview.save();
}

async function updateReview(id, review) {
  /*
  let existingReview = await Review.findById(id);
  if (!existingReview) {
    throw new Error("Review not found with id " + id);
  }
  review.movie = new mongoose.Types.ObjectId(review.movie);
  return await Review.findByIdAndUpdate(id, review, { new: true });
  */
  return Review.findById(id)
    .then((rv) => {
      if (!rv) {
        throw new Error("Review not found with id " + id);
      }
      return Movie.findById(review.movie);
    })
    .then((movie) => {
      if (!movie) {
        throw new Error("Could not find movie with id " + review.movie);
      }
      review.movie = new mongoose.Types.ObjectId(review.movie);
      return Review.findByIdAndUpdate(id, review, { new: true });
    });
}

async function deleteReview(id) {
  let existingReview = await Review.findById(id);
  if (!existingReview) {
    throw new Error("Review not found with id " + id);
  }
  return await Review.findByIdAndDelete(id);
}

module.exports = {
  getAllReviewsByMovieId,
  saveReview,
  updateReview,
  deleteReview,
};
