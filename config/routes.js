const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');

router.get('/', controller.base);
router.get('/celebrities', controller.listCelebrities);
router.get('/celebrity/:id', controller.celebrityDetails);
router.get('/celebrity/edit/:id', controller.editCelebrity);
router.post('/celebrity/edit/:id', controller.doEditCelebrity);
router.get('/celebrity/create', controller.createCelebrity);
router.post('/celebrity/create', controller.doCreateCelebrity);

// router.get('/movies', controller.listMovies);
// router.get('/movie/:id', controller.movieDetails);

//router.get('/', controller.base);

//router.get('/edit/:id', controller.edit);
//router.post('/edit/:id', controller.doEdit);



module.exports = router;