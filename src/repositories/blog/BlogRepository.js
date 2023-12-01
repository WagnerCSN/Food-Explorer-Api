const knex = require("../../database/knex");

class BlogRepository{
    async findByPlate(plate_id){
        const checkPlateExist = await knex("plates").where("id",plate_id).first();
        
        return checkPlateExist;
    }

    async findByCommentByPlate(plate_id){
        const checkCommentByPlate = await knex("blog").where({plate_id});
        
        return checkCommentByPlate;
       
    }

    async create({user_id, title, comments, rating, plate_id}){
        const blogCreated = await knex("blog").where({user_id}).insert({
            user_id,
            title,
            comments, 
            rating,
            plate_id
        });

        return blogCreated;
    }
}

module.exports = BlogRepository;