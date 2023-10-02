const knex = require("../../database/knex");

class FavoritePlatesShowRepository{
    async show(user_id){
        const checkFavoritePlatesWithUser = await knex("favorites").where({user_id}).join('users', 'users.id', '=', 'favorites.user_id').select('users.name').join('plates', 'plates.id', '=', 'favorites.plate_id').select('*')

        return checkFavoritePlatesWithUser;
    }
    
}

module.exports = FavoritePlatesShowRepository;