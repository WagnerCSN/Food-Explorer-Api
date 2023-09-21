const knex = require("../../database/knex;")

class PlatesDeleteRepository{
    async findByPlates(id){
        const checkPlatesExist = await knex("plates").where({id}).first();

        return checkPlatesExist;
    }

    async deletePlates(id){
        await knex("plates").where({id}).delete();
    }
}

module.exports = PlatesDeleteRepository;