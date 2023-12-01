const knex = require("../../database/knex");

class IngredientsRepository{
    async findByName(){
        const checkIngredientExist = await knex("ingredients").select('*');

        return checkIngredientExist;
    }

    async create(insertIngredient){
        const ingredientCreated = await knex("ingredients").insert(insertIngredient);

        return ingredientCreated;
    }
}

module.exports = IngredientsRepository;