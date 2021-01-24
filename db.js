const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBeers: getBeers,
  getGains: getGains,
  getHops: getHops,
  getYeasts: getYeasts,
  getRecipe: getRecipe
}

function getBeers(db = connection) {
  return db('beers').select()
}

function getGains(db = connection) {
  return db('grains').select()
}

function getHops(db = connection) {
  return db('hops').select()
}

function getYeasts(db = connection) {
  return db('yeasts').select()
}

function getRecipe(beer_id, db = connection) {
  return db('beers').select()
    .where('id', beer_id)
    .then(beers => {
      return Promise.all(beers.map(beer => {
        return db('grains')
        .join('beers_grains', 'beers_grains.grain_id', 'grains.id')
        .where('beers_grains.beer_id', beer.id)
        .select('grains.*', 'beers_grains.amount')
        .then(grains => {
          beer.grains = grains
          return beer
        })
      }))
    })
    .then(beer => {
      return beer
    })
}