const knex = require("../../database/knex");

class IngredientsUpdateRepository {
  async findByIngredients(id) {
    const ingredients = await knex("ingredients").select("*").where("id", id).first();

    return ingredients;
  }

  async deletedIngredients(plate_id) {
    const deleted = await knex("ingredients").where({plate_id}).delete();

    return deleted;
  }

  async insertIngredients(insertIngredient){ 
    const ingredientCreated = await knex("ingredients").insert(insertIngredient);

  }

}

module.exports = IngredientsUpdateRepository;