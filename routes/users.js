const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBeers()
    .then(beers => {
      return res.render('index', { beers: beers } )
    })
})

router.get('/:id', (req, res) => {
  db.getRecipes
})


module.exports = router
