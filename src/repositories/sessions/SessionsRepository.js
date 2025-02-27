const knex = require("../../database/knex");

class SessionsRepository {
  async findByUser(email) {
    const user = await knex("users").where({ email }).first();

    return user;
  }
}
module.exports = SessionsRepository;
