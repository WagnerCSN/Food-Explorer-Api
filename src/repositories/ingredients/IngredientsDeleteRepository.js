const knex = require("../../database/knex")

class IngredientsDeleteRepository{
    async findByIngredient(id){
        const checkIngredientExist = await knex("ingredients").where({id}).first();

        return checkIngredientExist;
    }

    async deleteIngredient(id){
        const deletedIngredient = await knex("ingredients").where({id}).delete();

        return deletedIngredient;
    }
}

module.exports = IngredientsDeleteRepository