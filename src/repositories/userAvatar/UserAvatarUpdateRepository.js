const knex = require("../../database/knex");

class UserAvatarUpdateRepository {
  async findByUser(user_id) {
    const user = await knex("users").where({ id: user_id }).first();

    return user;
  }

  async update({ user, user_id }) {
    const updatedUser = knex("users").update(user).where({ id: user_id });

    return updatedUser;
  }
}
module.exports = UserAvatarUpdateRepository;
