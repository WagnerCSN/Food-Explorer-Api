const knex = require("../../database/knex");

class PlatesShowRepository{
    async searchIngredients(id){
        const selectIngredients = await knex("ingredients").where({plate_id: id});

        return selectIngredients;
    }
    async show(id){
        const checkPlatesWithId = await knex("plates").where({id}).first();

        return checkPlatesWithId;
    }
    
}

module.exports = PlatesShowRepository;