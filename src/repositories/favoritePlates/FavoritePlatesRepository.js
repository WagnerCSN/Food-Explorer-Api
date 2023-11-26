const knex = require("../../database/knex");

class FarovitePlatesRepository{
   
    async findByFavoritePlate(user_id){
        const checkFavoritePlatesExist = await knex("favorites").where({user_id});

        return checkFavoritePlatesExist;
    }

    async findByUser(user_id){
        const checkUserExist = await knex("users").where("id", user_id).first();
   
        return checkUserExist;
    }

    async findByPlate(plate_id){
        const checkPlateExist = await knex("plates").where("id", plate_id).first();
        
        return checkPlateExist;
    }

    async create({user_id, plate_id}){
        const favoritePlatesCreated = await knex("favorites").insert({user_id, plate_id});

        return favoritePlatesCreated;
    }
}

module.exports = FarovitePlatesRepository;