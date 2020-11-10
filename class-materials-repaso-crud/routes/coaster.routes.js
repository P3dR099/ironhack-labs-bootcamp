const express = require('express')
const router = express.Router()
const Coaster = require('../models/coaster.model');
const { findByIdAndDelete } = require('../models/park.model');
const Park = require('../models/park.model');
const { route } = require('./park.routes');

// Aquí los endpoints

router.get('/', (req, res) => { 
    Coaster.find()
    .select({ name: 1, _id: 1, description: 1, inversions: 1, length: 1 })
    .populate("park")
    .then(coasters => {
      res.render("coasters/coasters-index", { coasters });

    });
});


router.get('/new', (req, res, next) => {
    Park.find()
      .then(allParks => {
        res.render("coasters/new-coaster", {parks: allParks})
      })
      .catch(() => next());
})


router.post('/new', (req, res) => {

    Coaster.create({
        name: req.body.name,
    description: req.body.description,
    inversions: req.body.inversions,
    length: req.body.length,
    active: true,
    parks: req.body.parks
    })
        .then(() => res.redirect('/'))
        .catch(res => console.log(res))
})


router.get('/:id', (req, res) => {

    console.log(req.params)

    Coaster.findById(req.params.id)
        .populate("park")
        .then(placeData => res.render('coasters/coasters-index', {placeData}))
        .catch(err => console.log(err))

})

router.get('/:id/delete', (req, res) => {

    Coaster.findByIdAndDelete(req.params.id)
      .populate('park')
      .then(deletePlace => res.redirect('/'))
      .catch(err => console.log(err))  
})


module.exports = router