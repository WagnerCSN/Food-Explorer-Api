const knex = require("../../database/knex");

class BlogUpdateRepository {
  async findByBlog(id) {
    const blog = await knex("blog").select("*").where("id", id).first();

    return blog;
  }

  async update({ comments, rating, id }) {
    const blogUpdated = await knex("blog").where({ id }).update({comments, rating});

    return blogUpdated;
  }
}

module.exports = BlogUpdateRepository;