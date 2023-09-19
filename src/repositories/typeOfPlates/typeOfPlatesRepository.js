const knex = require("../../database/knex");

class TypeOfPlatesRepository{
    async findByName(name){
        const checkTypePlateExist = await knex("typeOfPlates").where({name}).first();

        return checkTypePlateExist;
    }

    async create({name}){
        const typePlateCreated = await knex("typeOfPlates").insert({name})

        return typePlateCreated;
    }
}

module.exports = TypeOfPlatesRepository;