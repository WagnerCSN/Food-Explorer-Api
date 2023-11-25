const knex = require("../../database/knex");

class FavoritePlatesShowRepository{
    async show(user_id){
        const checkFavoritePlatesWithUser = await knex("favorites").where("favorites.user_id", user_id).join("plates", "plates.id", "=", "favorites.plate_id").select("*");
        
        return checkFavoritePlatesWithUser;
    }
    
}

module.exports = FavoritePlatesShowRepository;