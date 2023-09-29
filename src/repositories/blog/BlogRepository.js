const knex = require("../../database/knex");

class BlogRepository{
    async findByPlate(plate_id){
        const checkPlateExist = await knex("plates").where("id",plate_id).first();
        
        return checkPlateExist;
    }

    async findByEmail(email){
        const checkEmailExist = await knex("blog").where({email}).first();
        
        return checkEmailExist;
    }

    async findByName(name){
        const checkNameExist = await knex("blog").where({name}).first();
        
        return checkNameExist;
    }

    async create({name, email, comments, rating, plate_id}){
        const blogCreated = await knex("blog").where({plate_id}).insert({
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