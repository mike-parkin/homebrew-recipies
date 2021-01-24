exports.seed = function (knex, Promise) {
    return knex('yeasts').insert([
        { id: 3000001, brand: 'Fermentis', name: 'Safale US-05', type: 'American Ale Yeast' },
        { id: 3000002, brand: 'Fermentis', name: 'Safale S-04', type: 'English Ale Yeast' },
        { id: 3000002, brand: 'White Labs', name: 'WLP800', type: 'Lager/Pilsner Yeast' },
        { id: 3000003, brand: 'Lallemand', name: 'Belle Saison Yeast', type: 'Saison Yeast' }
    ])
}