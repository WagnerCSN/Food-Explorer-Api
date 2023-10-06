const knex = require("../../database/knex");

class PromotionRepository{

    async findByDishWithPromotion(plate_id){
        const checkPromotionActive = await knex("promotionItem").where({plate_id}).join("promotion", "promotion.id", "=", "promotionItem.promotion_id").select('*');
        knex("favorites").join("plates", "plates.id", "=", "favorites.plate_id")
        return checkPromotionActive;
    }

    async findByPlate(plate_id){
        const checkPlateExist = await knex("plates").where({"id": plate_id}).first();

        return checkPlateExist;
    }

    async findByName(name){
        const checkPromotionNameExist = await knex("promotion").where({name}).first();

        return checkPromotionNameExist;
    }

    async create({initialDate, finalDate, name}){
        const promotionCreated = await knex("promotion").insert({initialDate, finalDate, name})

        return promotionCreated;
    }

    async insertPromotionItem(insertPromotionItem){
        const promotionItemCreated = await knex("promotionItem").insert(insertPromotionItem);

        return promotionItemCreated;
    }
}

module.exports = PromotionRepository;