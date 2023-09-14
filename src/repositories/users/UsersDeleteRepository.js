const knex = require("../../database/knex");

class UsersDeleteRepository{
    
    async delete(id){
        await knex("users").where({id}).delete();
    }
}

module.exports = UsersDeleteRepository;