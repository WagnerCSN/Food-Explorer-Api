const knex = require("../../database/knex");

class UsersIndexRepository{
    async indexByName(name){
        const usersIndexName = await knex("users").whereLike("name", `%${name}%`);

        return usersIndexName;
    }

    async indexByRole(role){
        const usersIndexRole = await knex("users").whereLike("role", `%${role}%`);

        return usersIndexRole;
    }
}

module.exports = UsersIndexRepository;