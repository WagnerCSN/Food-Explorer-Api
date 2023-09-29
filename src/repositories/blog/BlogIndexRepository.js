const knex = require("../../database/knex");

class BlogIndexRepository{
    async indexByRating(rating){
        const blogIndexRating = await knex("blog").select('blog.id',  'blog.name', 'plates.name', 'blog.comments', 'blog.rating').innerJoin("plates", "blog.plate_id", "plates.id").whereLike("rating", `%${rating}%`).orderBy("created_at");

        return blogIndexRating;
    }

    async selectByPlate(plate_name){
        const plate = await knex("blog").select('plates.name').innerJoin("plates", "blog.plate_id", "plates.id").whereLike("plates.name", `%${plate_name}%`).orderBy("created_at"); 
        const blogs = await knex("blog").select();
       
        const plates = plate.map(plate => {
            const blogWithPlate = blogs.filter(blog => blog.id===plate.id)
            console.log(blogWithPlate);
            return{
                namePlato: plate.name,
                name: blogWithPlate.name,
                comments: blogWithPlate.comments,
                rating: blogWithPlate.rating,
                date: blogWithPlate.created_at
            }
        })
        return blogs;
    }

}

module.exports = BlogIndexRepository;