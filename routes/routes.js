const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/recipes', (req, res) => {
  db.getBeers()
    .then(beers => {
      return res.render('recipes', { beers: beers } )
    })
})

router.get('/grains-list', (req, res) => {
  db.getGains()
    .then(grains => {
      return res.render('grains-list', { grains: grains })
    })
})

router.get('/hops-list', (req, res) => {
  db.getHops()
    .then(hops => {
      return res.render('hops-list', { hops: hops })
    })
})

router.get('/yeast-list', (req, res) => {
  db.getYeasts()
    .then(yeast => {
      return res.render('yeast-list', { yeast: yeast })
    })
})


router.get('recipes/:id', (req, res) => {
  db.getRecipes
})


module.exports = router