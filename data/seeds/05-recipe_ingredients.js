exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1 },
    { recipe_id: 1, ingredient_id: 2 },
    { recipe_id: 2, ingredient_id: 3 },
    { recipe_id: 2, ingredient_id: 4 },
  ]);
};