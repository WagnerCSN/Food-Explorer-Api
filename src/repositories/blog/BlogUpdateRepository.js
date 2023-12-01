const knex = require("../../database/knex");

class BlogUpdateRepository {
  async findByBlogWithUser(user_id) {
    const blogs = await knex("blog").select("*").where({user_id});

    return blogs;
  }

  async update({ title, comments, rating, id }) {
    const blogUpdated = await knex("blog").where({ id }).update({title, comments, rating});

    return blogUpdated;
  }
}

module.exports = BlogUpdateRepository;