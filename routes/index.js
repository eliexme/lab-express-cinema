const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async(req, res)=>{
    try {
        const allMovies = await MovieModel.find()
        res.render('movies', {allMovies})
    } catch (error) {
        console.log(error)
    }
})

router.get('/movieDets/:movieId', async(req, res)=>{
    try {
        const {movieId} = req.params
        //console.log(movieId)
        const selectedMovie = await MovieModel.findById(movieId)
        console.log(selectedMovie)
        res.render('movieDetails', {selectedMovie})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
