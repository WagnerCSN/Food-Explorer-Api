const knex = require("../../database/knex");

class UsersIndexRepository{
    async index(name){
        const usersIndex = await knex("users").whereLike("name", `%${name}%`);

        return usersIndex;
    }
}

module.exports = UsersIndexRepository;