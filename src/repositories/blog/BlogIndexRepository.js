const knex = require("../../database/knex");

class BlogIndexRepository{
    async indexByRating(rating){
        const blogIndexRating = await knex("blog").select('blog.id',  'plates.name', 'blog.comments', 'blog.rating').innerJoin("plates", "blog.plate_id", "plates.id").whereLike("rating", `%${rating}%`).orderBy("created_at");

        return blogIndexRating;
    }

    async selectByPlate(plate_name){
        const plate = await knex("blog").select('blog.id',  'plates.name', 'blog.comments', 'blog.rating').innerJoin("plates", "blog.plate_id", "plates.id").whereLike("plates.name", `%${plate_name}%`).orderBy("created_at"); 

        return plate;
    }

}

module.exports = BlogIndexRepository;