const knex = require("../../database/knex");

class PlatesDeleteRepository{
    async findByPlates(id){
        const checkPlatesExist = await knex("plates").where({id}).first();

        return checkPlatesExist;
    }

    async deletePlates(id){
        const deletedPlates = await knex("plates").where({id}).delete();

        return deletedPlates;
    }
}

module.exports = PlatesDeleteRepository;