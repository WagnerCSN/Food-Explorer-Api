const knex = require("../../database/knex");

class TypeOfPlatesIndexRepository{
    async indexByName(name){
        const typeOfPlatesIndexName = await knex("typeOfPlates").whereLike("name", `%${name}%`);

        return typeOfPlatesIndexName;
    }
}
module.exports = TypeOfPlatesIndexRepository;