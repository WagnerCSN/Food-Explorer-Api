const knex = require("../../database/knex")

class FavoritePlatesDeleteRepository{
    async findByPlatesWithUser(user_id){
        const platesWithUser = await knex("favorites").where("favorites.user_id", user_id).select("*");

        return platesWithUser;
    }

    async deleteFavorite({id}){
        
        const deletedFavorite = await knex("favorites").where({id}).delete();

        return deletedFavorite;
    }
}

module.exports = FavoritePlatesDeleteRepository