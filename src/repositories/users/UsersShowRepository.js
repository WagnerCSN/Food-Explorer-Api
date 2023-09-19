const knex = require("../../database/knex");

class UsersShowRepository{
    async show(id){
        const checkUserWithId = await knex("users").where({id}).first();

        return checkUserWithId;
    }
    
}

module.exports = UsersShowRepository;