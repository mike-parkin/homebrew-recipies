exports.seed = function (knex, Promise) {
    return knex('beers_yeasts').insert([
        { id: 1, beer_id: 880004, yeast_id: 3000001, amount: "1x Sachet"}
    ])
}