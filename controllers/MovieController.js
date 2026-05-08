const MovieService = require('../services/MoieService');

async function getAllMovies(req,res){
    try {
        let movies = await MovieService.getAllMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
}

async function createMovie(req,res){
    let movie = req.body;
    try {
        let newMovie = await MovieService.createMovie(movie);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
}

async function getMovieByID(req,res){
    let id = req.params.id;
    try {
        let movie = await MovieService.getMovieByID(id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
}

async function updateMovie(req,res){
    let id = req.params.id;
    let movie = req.body;
    try {
        let updatedMovie = await MovieService.updateMovie(id,movie);        
        res.json(updatedMovie);
    } catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
}

async function deleteMovie(req,res){
    let id = req.params.id;
    try {
        let movie = await MovieService.deleteMovie(id);
        res.json(movie);
    } catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
}

module.exports = {
    getAllMovies,
    createMovie,
    getMovieByID,
    updateMovie,
    deleteMovie
}