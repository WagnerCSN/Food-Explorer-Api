const knex = require("../../database/knex")

class BlogDeleteRepository{
    async findByBlog(id_blog){
        const checkBlogExist = await knex("blog").where({id_blog}).first();

        return checkBlogExist;
    }

    async deleteBlog(id_blog){
        const deletedBlog = await knex("blog").where({id_blog}).delete();

        return deletedBlog;
    }
}

module.exports = BlogDeleteRepository