const knex = require("../../database/knex");

class PromotionIndexRepository{
    async indexByName(name){
        const promotionIndexName = await knex("promotion").select().whereLike("name", `%${name}%`);

        return promotionIndexName;
    }

    async selectByTypeOfpromotion(){
        const typeid = await knex("typeofpromotion").select();

        return typeid;
    }

    async selectByIngredients(){
        const ingredient = await knex("ingredients").select();

        return ingredient;
    }
    
    async indexByTypeOfpromotion(typeOfPlate_name){
        
        const promotionIndexTypeOfPlate = await knex("typeOfpromotion").select().innerJoin("promotion", "promotion.typeOfPlate_id", "typeOfpromotion.id").whereLike("typeOfpromotion.name", `%${typeOfPlate_name}%`); 

        return promotionIndexTypeOfPlate;
    }

    async indexByIngredients(ingredients_name){
        
        const promotionIndexIngredients = await knex("ingredients").select().innerJoin("promotion", "promotion.ingredient_id", "ingredients.id").whereLike("ingredients.name", `%${ingredients_name}%`);

        return promotionIndexIngredients;
    }
}

module.exports = PromotionIndexRepository;