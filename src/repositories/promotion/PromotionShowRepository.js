const knex = require("../../database/knex");

class PromotionShowRepository{
    async show(id){
        const checkPromotionWithId = await knex("promotion").where({id}).first();

        return checkPromotionWithId;
    }
    
}

module.exports = PromotionShowRepository;