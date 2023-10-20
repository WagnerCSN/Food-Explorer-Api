const knex = require("../../database/knex");

class IngredientsImageUpdateRepository {
    
    async findByIngredients(id) {
    const ingredients = await knex("ingredients").where({id}).first();

    return ingredients;
  }

  async update({ ingredients, id }) {

    const updatedIngredients = knex("ingredients").where({ id }).update(ingredients);

    return updatedIngredients;
  }
}
module.exports = IngredientsImageUpdateRepository;