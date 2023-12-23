const knex = require("../../database/knex");

class IngredientsRepository{
    async findByName(){
        const checkIngredientExist = await knex("ingredients").select('*');

        return checkIngredientExist;
    }

    async create(insertIngredient, plate_id){
        const ingredientCreated = await knex("ingredients").insert(insertIngredient, plate_id);

        return ingredientCreated;
    }
}

module.exports = IngredientsRepository;