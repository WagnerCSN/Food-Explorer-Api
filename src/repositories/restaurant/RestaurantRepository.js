const knex = require("../../database/knex");

class RestaurantRepository{
    async create({name, fone, email, address, cnpj, city, state}){
        const restaurantCreated = await knex("restaurant").insert({name, fone, email, address, cnpj, city, state});

        return restaurantCreated;
    }
}
module.exports = RestaurantRepository;