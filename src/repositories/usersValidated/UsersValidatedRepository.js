const knex = require("../../database/knex");

class UsersValidatedRepository {
  async findByUser(user) {
    const checkUserExist = await knex("users")
      .where({id: user.id})

    return checkUserExist;
  }
}

module.exports = UsersValidatedRepository;