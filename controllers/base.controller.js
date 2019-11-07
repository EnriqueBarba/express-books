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
};

module.exports.doEditCelebrity = (req, res, next) => {
    console.log(`doEditCelebritie`)
};

module.exports.createCelebrity = (req, res, next) => {
    console.log(`createCelebritie`)
};

module.exports.doCreateCelebrity = (req, res, next) => {
    console.log(`doCreateCelebritie`)
};