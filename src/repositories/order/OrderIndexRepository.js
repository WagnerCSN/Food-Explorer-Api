const knex = require("../../database/knex");

class OrderIndexRepository{
    async indexByName(name_user){
        const orderIndexNameUser = await knex("favorites").join("plates", "plates.id", "=", "favorites.plate_id").whereLike("plates.name", `%${name_plates}%`).select('*');

        return orderIndexNameUser;
    }

    async indexByNameDish(bestSellingDish){
        const orderBestSellingDish = await knex("favorites").join("plates", "plates.id", "=", "favorites.plate_id").whereLike("plates.name", `%${name_plates}%`).select('*');

        return orderBestSellingDish;
    }
}
module.exports = OrderIndexRepository;