const knex = require("../../database/knex");

class IngredientsRepository{
    async findByName(name){
        const checkIngredientExist = await knex("ingredients").where({name}).first();

        return checkIngredientExist;
    }

    async create({name, image}){
        const ingredientCreated = await knex("ingredients").insert({
            name,
            image
        })

        return ingredientCreated;
    }
}

module.exports = IngredientsRepository;