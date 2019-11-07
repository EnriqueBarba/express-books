const createError = require('http-errors');
const mongoose = require('mongoose');

module.exports.base = (req, res, next) => {
    res.render('index', {
        title: 'Welcome to your CRUD project'
    });
};

module.exports.listCelebrities = (req, res, next) => {
    console.log(`listCelebrities`)
};

module.exports.celebrityDetails = (req, res, next) => {
    console.log(`celebritieDetails`)
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