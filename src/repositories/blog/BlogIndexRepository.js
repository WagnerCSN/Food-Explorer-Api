const knex = require("../../database/knex");

class BlogIndexRepository{
    async indexByRating(rating){
        const blogIndexRating = await knex("blog").select().whereLike("rating", `%${rating}%`).orderBy("created_at");

        return blogIndexRating;
    }

    async selectByPlate(plate_name){
        const plate = await knex("blog").select().innerJoin("blog", "blog.plate_id", "plates.id").whereLike("plates.name", `%${plate_name}%`); 

        return plate;
    }

}

module.exports = BlogIndexRepository;