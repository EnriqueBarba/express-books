const createError = require('http-errors');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model')

module.exports.base = (req, res, next) => {
    res.render('index', {
        title: 'Welcome to Celebrities and movies CRUD project'
    });
};

module.exports.listCelebrities = (req, res, next) => {
    console.log(`listCelebrities`)
    Celebrity.find()
    .then(celebrities => {
        res.render('celebrities/celebritiesList', {celebrities})
    })
    .catch( err => {
        next(err)
    })
};

module.exports.celebrityDetails = (req, res, next) => {
    console.log(`celebrityDetails`)
    Celebrity.findById(req.params.id)
    .then( celebrity => {
        res.render('celebrities/celebrityDetails', {celebrity})
    })
    .catch( err => {
        next(err)
    })
};

module.exports.editCelebrity = (req, res, next) => {
    console.log(`editCelebritie`)
    Celebrity.findById(req.params.id)
    .then( celebrity => {
        res.render('celebrities/celebrityForm', {celebrity})
    })
    .catch( err => {
        next(err)
    })
};

module.exports.doEditCelebrity = (req, res, next) => {
    console.log(`doEditCelebritie`)

    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        next(createError(404));
    } else {
        Celebrity.findByIdAndUpdate(id, req.body, {runValidators:true, new: true })
            .then(celebrity => {
                console.log(celebrity)
                res.render('celebrities/celebrityDetails', {celebrity})
            })
            .catch(
                error => next(error)
            )
    }

};

module.exports.createCelebrity = (req, res, next) => {
    console.log(`createCelebritie`)
    res.render('celebrities/celebrityForm')
};

module.exports.doCreateCelebrity = (req, res, next) => {
    console.log(`doCreateCelebritie`)
  const celebrity = new Celebrity(req.body);
  celebrity.save()
  .then(
      res.render('index', {
        title: 'Celebrities created! =D'
    }) 
  )
  .catch( error => next(error)) 
};