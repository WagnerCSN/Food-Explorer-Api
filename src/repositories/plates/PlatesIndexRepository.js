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
        // const plates = await knex("plates").select(["id", "name", "description", "cost", "image"]).where({id}).first();
        const platesIndexTypeOfPlate_id = await knex("plates").select(["typeOfPlates.name"]).where("typeOfPlates.id",typeOfPlate_id).whereLike("typeOfPlate_id", `%${typeOfPlate_id}%`).innerJoin("typeOfPlates", "typeOfPlate_id", "plates.typeOfPlate_id");

        const platesWithType = platesIndexTypeOfPlate_id.map(TypeOfPlate =>{
            return {
                    // ...plates,
                    "tipo de plato": TypeOfPlate.name
            }
        })
        return platesWithType;
    }

    async indexByIngredients(ingredient_id){
        const platesIndexIngredient_id = await knex("plates").whereLike("ingredient_id", `%${ingredient_id}%`);

        return platesIndexIngredient_id;
    }
}

module.exports = PlatesIndexRepository;