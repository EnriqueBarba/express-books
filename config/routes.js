const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');

router.get('/', controller.base);
// diferente controller para celebrities y movies
// const celebritiesController = require('../controllers/celebrities.controller');
// const moviesController = require('../controllers/movies.controller');

router.get('/celebrities', controller.listCelebrities);
router.get('/celebrity/create', controller.createCelebrity); // new
router.get('/celebrity/:id', controller.celebrityDetails); // show
router.get('/celebrity/edit/:id', controller.editCelebrity); // edit
router.post('/celebrity/edit/:id', controller.doEditCelebrity); // update
router.post('/celebrity/create', controller.doCreateCelebrity); // create

// router.get('/movies', controller.listMovies);
// router.get('/movie/:id', controller.movieDetails);

//router.get('/', controller.base);

//router.get('/edit/:id', controller.edit);
//router.post('/edit/:id', controller.doEdit);



module.exports = router;