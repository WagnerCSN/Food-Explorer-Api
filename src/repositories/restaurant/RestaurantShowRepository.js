const knex = require("../../database/knex");

class RestaurantShowRepository{
    async show(id){
        const checkRestaurantWithId = await knex("restaurant").where({id}).first();

        return checkRestaurantWithId;
    }
}

module.exports = RestaurantShowRepository;