exports.seed = function (knex, Promise) {
    return knex('grains').insert([
        { id: 1000001, name: "Pilsner Malt" },
        { id: 1000002, name: "2 Row Pale Ale Malt" },
        { id: 1000003, name: "Light Crystal Malt" },
        { id: 1000005, name: "Medium Crystal Malt" },
        { id: 1000006, name: "Dark Crystal Malt" },
        { id: 1000007, name: "Vienna Malt" },
        { id: 1000008, name: "Dark Choclate Malt" },
        { id: 1000009, name: "Roasted Barley" },
    ])
}