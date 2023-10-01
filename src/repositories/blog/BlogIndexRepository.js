const knex = require("../../database/knex");

class BlogIndexRepository{
    async indexByRating(rating){
        const blogIndexRating = await knex("blog").select('blog.id',  'blog.name', 'plates.name', 'blog.comments', 'blog.rating').innerJoin("plates", "blog.plate_id", "plates.id").whereLike("rating", `%${rating}%`).orderBy("created_at");

        return blogIndexRating;
    }

    async selectByPlate(plate_name){
        let plate = await knex("blog").select(['plates.id', 'plates.name']).innerJoin("plates", "blog.plate_id", "plates.id").whereLike("plates.name", `%${plate_name}%`).orderBy("created_at"); 
        const blogs = await knex("blog").select();
     
        const plates = plate.map(plate => {
            const blogWithPlate = blogs.filter(blog => blog.plate_id===plate.id)
        
            return{
                namePlato: plate.name,
                name: blogWithPlate.map(blog => blog.name).toString(),
                comments: blogWithPlate.map(blog => blog.comments).toString(),
                rating: blogWithPlate.map(blog => blog.rating).toString(),
                date: blogWithPlate.map(blog => blog.created_at).toString()  
            }
        });
        return plates;
    }

}

module.exports = BlogIndexRepository;