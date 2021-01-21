exports.seed = function (knex, Promise) {
    return knex('beers').insert([
        { id: 880001 , name: "mike's Pilsner", style: "Czech Pilsner", abv: 4.5 },
        { id: 880002 , name: "Superhop Pale ale", style: "American Pale Ale", abv: 5.8 },
        { id: 880003 , name: "Paddy Obrian's Stout", style: "Irish Stout", abv: 4.5 },
        { id: 880004 , name: "Yakima Hop IPA", style: "West Coast IPA", abv: 6.5 },
        { id: 880005 , name: "Summer Saison", style: "Saison", abv: 6.0 },
    ])
}