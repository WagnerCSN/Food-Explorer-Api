const knex = require("../../database/knex");

class PromotionIndexRepository{
    async indexByNamePromotion(name_promotion){
        const promotionIndexPromotionWithName_promotion = await knex("promotionItem").join("promotion", "promotion.id", "=", "promotionItem.promotion_id").whereLike("promotion.name", `%${name_promotion}%`).select('*').join("plates", "plates.id", "=", "promotionItem.plate_id");
      
        return promotionIndexPromotionWithName_promotion;
    }

    async searchPromotionItem(){
        const findPromotionWithPromotionItem = await knex("promotionItem").join("promotion", "promotion.id", "=", "promotionItem.promotion_id").select('*');
      
        return findPromotionWithPromotionItem;
    }

    async indexByPromotion(name_dish){
        const promotionIndexPromotionWithNameDish = await knex("promotionItem").join("plates", "plates.id", "=", "promotionItem.plate_id").whereLike("plates.name", `%${name_dish}%`).select('*');
      
        return promotionIndexPromotionWithNameDish;
    }
}

module.exports = PromotionIndexRepository;