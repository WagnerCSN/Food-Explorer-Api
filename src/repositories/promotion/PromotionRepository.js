const knex = require("../../database/knex");

class PromotionRepository{

    // async findByActive(finalDate){
    //     const checkPromotionActive = await knex("promotion").where({finalDate}).first();

    //     return checkPromotionActive;
    // }

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