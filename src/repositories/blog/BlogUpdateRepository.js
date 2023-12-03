const knex = require("../../database/knex");

class BlogUpdateRepository {
  async findByBlogWithUser(id_blog) {
    const blogs = await knex("blog").select("*").where({id_blog}).first();

    return blogs;
  }

  async update({ title, comments, rating, id_blog }) {
    const blogUpdated = await knex("blog").where({ id_blog }).update({title, comments, rating});

    return blogUpdated;
  }
}

module.exports = BlogUpdateRepository;