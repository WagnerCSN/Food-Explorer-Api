const knex = require("../../database/knex");

class UsersDeleteRepository{

    async  findByUser(id){
        const checkUserExist = await knex("users").where({id}).first();

        return checkUserExist;
    }
    
    async delete(id){
        await knex("users").where({id}).delete();
    }
}

module.exports = UsersDeleteRepository;