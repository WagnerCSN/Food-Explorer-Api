const knex = require("../../database/knex");

class PlatesIndexRepository{
    async indexByName(name){
        const platesIndexName = await knex("plates").whereLike("name", `%${name}%`);

        return platesIndexName;
    }

    async indexByCost(cost){
        const platesIndexcost = await knex("plates").whereLike("cost", `%${cost}%`);

        return platesIndexcost;
    }

    async indexByTypeOfPlates(typeOfPlate_id){
        const platesIndexTypeOfPlate_id = await knex("plates").whereLike("typeOfPlate_id", `%${typeOfPlate_id}%`);

        return platesIndexTypeOfPlate_id;
    }

    async indexByIngredients(ingredient_id){
        const platesIndexIngredient_id = await knex("plates").whereLike("ingredient_id", `%${ingredient_id}%`);

        return platesIndexIngredient_id;
    }
}

module.exports = PlatesIndexRepository;