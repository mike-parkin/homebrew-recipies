exports.seed = function (knex, Promise) {
    return knex('beers_hops').insert([
        { id: 1, beer_id: 880004, hop_id: 2000003, 
            total_amount: 15,
            instructions: "45minutes"
        },
        { id: 2, beer_id: 880004, hop_id: 2000002, 
            total_amount: 60,
            instructions: "15 minutes: 15g, Flameout: 15g, Dry hop: 30g"
        },
        { id: 3, beer_id: 880004, hop_id: 2000001, 
            total_amount: 45,
            instructions: "Flameout: 15g, Dry hop: 30g"
        },
        
    ])
}