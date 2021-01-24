const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBeers: getBeers,
  getGains: getGains,
  getHops: getHops,
  getYeasts: getYeasts
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