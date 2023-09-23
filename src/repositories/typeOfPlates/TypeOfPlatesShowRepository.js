const knex = require("../../database/knex");

class TypeOfPlatesShowRepository{
    async show(id){
        const checkTypeOfPlatesWithId = await knex("typeOfPlates").where({id}).first();

        return checkTypeOfPlatesWithId;
    }
}

module.exports = TypeOfPlatesShowRepository;