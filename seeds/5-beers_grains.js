exports.seed = function (knex, Promise) {
    return knex('beers_grains').insert([
       { id: 1, beer_id: 880004, grain_id: 1000002, amount: 4.0 },
       { id: 2, beer_id: 880004, grain_id: 1000005, amount: 0.25 },
    ])
}