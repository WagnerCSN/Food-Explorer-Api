const knex = require("../../database/knex");

class IngredientsIndexRepository{
    async indexByName(name){
        const ingredientsIndexName = await knex("ingredients").whereLike("name", `%${name}%`);

        return ingredientsIndexName;
    }

    async indexByPlateWithIngredients(id){
        const ingredientsIndexPlate_id = await knex("ingredients").where({plate_id: id});

        return ingredientsIndexPlate_id;
    }
}
module.exports = IngredientsIndexRepository;