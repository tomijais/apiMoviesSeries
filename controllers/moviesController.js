const db = require('../database/models');

module.exports = {
    getAll : (req, res) => {
        db.Movie.findAll()
        .then( result => {
            return res.status(200).json(result);
        })
        .catch( error => { res.status(503).send(error) });
    },

    getOne : (req, res) => {
        db.Movie.findByPk(req.params.id)
        .then( result => {
            return res.status(200).json(result);
        })
        .catch( error => { res.status(503).send(error) });
    },

    create : (req, res) => {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length 
        })
        .then( result => {
            return res.status(201).json(result);
        })
        .catch( error => { res.status(503).send(error) });
    }
};
