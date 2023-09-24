const knex = require("../../database/knex");

class TypeOfPlatesDeleteRepository{
    async findByTypeOfPlate(id){
        const checkTypeOfPlateExist = await knex("typeOfPlates").where({id}).first();

        return checkTypeOfPlateExist;
    }

    async deleteTypeOfPlate(id){
        const deletedTypeOfPlate = await knex("typeOfPlates").where({id}).delete();

        return deletedTypeOfPlate;
    }
}

module.exports = TypeOfPlatesDeleteRepository