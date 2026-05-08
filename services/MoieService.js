const Movie = require("../model/Movie");

async function getAllMovies(){
    let movie = await Movie.find();
    return movie;
}

async function createMovie(movie){
    let createMovie = new Movie(movie);
    return await createMovie.save();
}

async function getMovieByID(id){
    let movie = await Movie.findById(id);
    return movie;
}

async function updateMovie(id,movie){
    let updatedMovie = await Movie.findByIdAndUpdate(id,movie,{new:true});
    return updatedMovie;
}

async function deleteMovie(id){
    let movie = await Movie.findByIdAndDelete(id);
    return movie;
}

module.exports = {
    getAllMovies,createMovie,getMovieByID,updateMovie,deleteMovie
}