exports.seed = function (knex, Promise) {
  const empty = (table) => knex(table).del();

  return empty('beers')
    .then(() => empty('grains'))
    .then(() => empty('hops'))
    .then(() => empty('yeasts'))
  // Chain calls to empty in
  // order as required, e.g.:
  // .then(empty('profiles'))
}
