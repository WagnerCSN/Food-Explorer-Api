const knex = require("../../database/knex");

class FavoritePlatesIndexRepository{
    async indexByName(name_plates){
        const favoritePlatesIndexName = await knex("favorites").join("plates", "plates.id", "=", "favorites.plate_id").whereLike("plates.name", `%${name_plates}%`).select('*');

        return favoritePlatesIndexName;
    }
}
module.exports = FavoritePlatesIndexRepository;