const knex = require("../../database/knex")

class FavoritePlatesDeleteRepository{
    async findByFavorite(id){
        const checkFavoriteExist = await knex("favorites").where({id}).first();

        return checkFavoriteExist;
    }

    async deleteFavorite(id){
        const deletedFavorite = await knex("favorites").where({id}).delete();

        return deletedFavorite;
    }
}

module.exports = FavoritePlatesDeleteRepository