exports.seed = function (knex, Promise) {
    return knex('hops').insert([
        { id: 2000001, name: 'Citra', country: 'USA'},
        { id: 2000002, name: 'Cascade', country: 'USA'},
        { id: 2000003, name: 'Simcoe', country: 'USA'},
        { id: 2000004, name: 'Amarillo', country: 'USA'},
        { id: 2000005, name: 'Nelson Sauvin', country: 'NZ'},
        { id: 2000006, name: 'Taiheke', country: 'NZ'},
        { id: 2000007, name: 'Galaxy', country: 'Australia'},
        { id: 2000008, name: 'Victoria Secret', country: 'Australia'},
        { id: 2000009, name: 'Fuggles', country: 'UK'},
        { id: 2000010, name: 'Hallertauer Mittelfrüh', country: 'Germany'},
        { id: 2000011, name: 'Saaz', country: 'Czech Republic'},
    ])
}