const knex = require("../../database/knex;")

class TypeOfPlatesDeleteRepository{
    async findByTypeOfPlate(id){
        const checkTypeOfPlateExist = await knex("typeOfPlates").where({id}).first();

        return checkTypeOfPlateExist;
    }

    async deleteTypeOfPlate(id){
        await knex("typeOfPlates").where({id}).delete();
    }
}

module.exports = TypeOfPlatesDeleteRepository