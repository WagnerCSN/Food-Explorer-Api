const knex = require("../../database/knex");

class IngredientsShowRepository{
    async show(id){
        const checkIngredientsWithId = await knex("ingredients").where({id}).first();

        return checkIngredientsWithId;
    }
    
}

module.exports = IngredientsShowRepository;