const knex = require("../../database/knex");

class BlogIndexRepository{
    async indexByRating(rating){
        const blogIndexRating = await knex("blog").select('blog.id',  'blog.title', 'plates.name', 'blog.comments', 'blog.rating').innerJoin("plates", "blog.plate_id", "plates.id").whereLike("rating", `%${rating}%`).orderBy("created_at");

        return blogIndexRating;
    }

    async selectByPlate(plate_id){
       
         const plate = await knex("blog").select('*').innerJoin("plates", "blog.plate_id", "plates.id").where("plates.id", plate_id).join("users", "users.id", "=", "blog.user_id").orderBy("created_at"); 
        
         return plate;
    }

    async selectByblog(id_blog){
       
        const blog = await knex("blog").where({id_blog}).first();
       
        return blog;
   }

}

module.exports = BlogIndexRepository;