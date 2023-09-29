const knex = require("../../database/knex")

class BlogDeleteRepository{
    async findByBlog(id){
        const checkBlogExist = await knex("blog").where({id}).first();

        return checkBlogExist;
    }

    async deleteBlog(id){
        const deletedBlog = await knex("blog").where({id}).delete();

        return deletedBlog;
    }
}

module.exports = BlogDeleteRepository