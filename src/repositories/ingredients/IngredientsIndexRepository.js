const knex = require("../../database/knex");

class IngredientsIndexRepository{
    async indexByName(name){
        const ingredientsIndexName = await knex("ingredients").whereLike("name", `%${name}%`);

        return ingredientsIndexName;
    }
}
module.exports = IngredientsIndexRepository;