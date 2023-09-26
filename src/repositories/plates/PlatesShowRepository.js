const knex = require("../../database/knex");

class PlatesShowRepository{
    async show(id){
        const checkPlatesWithId = await knex("plates").where({id}).first();

        return checkPlatesWithId;
    }
    
}

module.exports = PlatesShowRepository;