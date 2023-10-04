const knex = require("../../database/knex")

class PromotionDeleteRepository{
    async findByPromotion(id){
        const checkPromotionExist = await knex("promotion").where({id}).first();

        return checkPromotionExist;
    }

    async deletePromotion(id){
        const deletedPromotion = await knex("promotion").where({id}).delete();

        return deletedPromotion;
    }
}

module.exports = PromotionDeleteRepository