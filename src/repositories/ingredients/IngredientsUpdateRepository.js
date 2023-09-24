const knex = require("../../database/knex");

class IngredientsUpdateRepository {
  async findByIngredients(id) {
    const ingredients = await knex("ingredients").select("*").where("id", id).first();

    return ingredients;
  }

  async findByIngredientsWithNameExist() {
    const ingredientsWithNameExist = await knex("ingredients").select("*");

    return ingredientsWithNameExist;
  }

  async update({ name, id }) {
    const ingredientsUpdated = await knex("ingredients").where({ id }).update({name});

    return ingredientsUpdated;
  }
}

module.exports = IngredientsUpdateRepository;