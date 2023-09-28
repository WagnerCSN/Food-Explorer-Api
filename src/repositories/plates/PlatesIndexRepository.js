const knex = require("../../database/knex");

class PlatesIndexRepository{
    async indexByName(name){
        const platesIndexName = await knex("plates").select().whereLike("name", `%${name}%`);

        return platesIndexName;
    }

    async selectByTypeOfPlates(){
        const typeid = await knex("typeofplates").select();

        return typeid;
    }

    async selectByIngredients(){
        const ingredient = await knex("ingredients").select();

        return ingredient;
    }
    
    async indexByTypeOfPlates(typeOfPlate_name){
        
        const platesIndexTypeOfPlate = await knex("typeOfPlates").select().innerJoin("plates", "plates.typeOfPlate_id", "typeOfPlates.id").whereLike("typeOfPlates.name", `%${typeOfPlate_name}%`); 

        return platesIndexTypeOfPlate;
    }

    async indexByIngredients(ingredients_name){
        
        const platesIndexIngredients = await knex("ingredients").select().innerJoin("plates", "plates.ingredient_id", "ingredients.id").whereLike("ingredients.name", `%${ingredients_name}%`);

        return platesIndexIngredients;
    }
}

module.exports = PlatesIndexRepository;