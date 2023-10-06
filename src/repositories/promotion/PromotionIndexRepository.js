const knex = require("../../database/knex");

class PromotionIndexRepository{
    async indexByNamePromotion(name_promotion){
        const promotionIndexName = await knex("promotionItem").join("promotion", "promotion.id", "=", "promotionItem.promotion_id").whereLike("promotion.name", `%${name_promotion}%`).select('*');
      
        return promotionIndexName;
    }

    async searchPromotionItem(){
        const promotionIndexp = await knex("promotionItem").join("promotion", "promotion.id", "=", "promotionItem.promotion_id").select('*');
      
        return promotionIndexp;
    }

    async indexByPromotion(name_dish){
        const promotionIndexPromotionWithNameDish = await knex("promotionItem").join("plates", "plates.id", "=", "promotionItem.plate_id").whereLike("plates.name", `%${name_dish}%`).select('*');
      
        return promotionIndexPromotionWithNameDish;
    }

    // async selectByIngredients(){
    //     const ingredient = await knex("ingredients").select();

    //     return ingredient;
    // }
    
    // async indexByTypeOfpromotion(name_dish){
        
    //     const promotionIndexTypeOfPlate = await knex("typeOfpromotion").select().innerJoin("promotion", "promotion.typeOfPlate_id", "typeOfpromotion.id").whereLike("typeOfpromotion.name", `%${name_dish}%`); 

    //     return promotionIndexTypeOfPlate;
    // }

    // async indexByIngredients(ingredients_name){
        
    //     const promotionIndexIngredients = await knex("ingredients").select().innerJoin("promotion", "promotion.ingredient_id", "ingredients.id").whereLike("ingredients.name", `%${ingredients_name}%`);

    //     return promotionIndexIngredients;
    // }
}

module.exports = PromotionIndexRepository;