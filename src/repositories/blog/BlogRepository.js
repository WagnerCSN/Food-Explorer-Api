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

    async create({name, email, comments, rating, plate_id}){
        const blogCreated = await knex("blog").where({email}).insert({
            name,
            email, 
            comments, 
            rating,
            plate_id
        });

        return blogCreated;
    }
}

module.exports = BlogRepository;