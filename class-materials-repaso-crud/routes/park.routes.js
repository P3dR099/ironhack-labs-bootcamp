const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Park = require('../models/park.model')


// Aquí los endpoints

router.get('/new', (req, res) => res.render('parks/new-park'))
router.post('/new', (req, res) => {
    const { name, description } = req.body

    Park.create([{name: name, description: description}])
        .then(newPark => console.log(`se ha han creado ${newPark} parque/s`))
        .catch(err => console.log(err))

    res.render('parks/new-park')
})


module.exports = router