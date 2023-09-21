const knex = require("../../database/knex;")

class IngredientsDeleteRepository{
    async findByIngredient(id){
        const checkIngredientExist = await knex("ingredients").where({id}).first();

        return checkIngredientExist;
    }

    async deleteIngredient(id){
        await knex("ingredients").where({id}).delete();
    }
}

module.exports = IngredientsDeleteRepository