const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBeers: getBeers,
  getGains: getGains,
  getHops: getHops,
  getYeasts: getYeasts,
  getRecipeGrains: getRecipeGrains,
  getRecipeHops: getRecipeHops
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

function getRecipeGrains(beer_id, db = connection) {
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

function getRecipeHops(recipe, db = connection) {
  return db('beers').select()
    .where('id', recipe[0].id)
    .then(beers => {
      return Promise.all(beers.map(beer => {
        return db('hops')
          .join('beers_hops', 'beers_hops.hops.id', 'hops.id')
          .where('beers_hops.beer_id', beer.id)
          .select('hops.*', 'beers_hops.amount', 'beers.hops.time')
          .then(hops => {
            recipe[0].hops = hops
            return recipe
          })
      }))
    })
}