const knex = require("../../database/knex");

class UsersUpdateRepository {
  async findByUser(id) {
    const user = await knex("users").select("*").where("id", id).first();

    return user;
  }

  async findByUsers() {
    const userWithEamilExist = await knex("users").select("*");

    return userWithEamilExist;
  }

  async update({ name, email, password, role, id }) {
    const userUpdated = await knex("users").where({ id }).update({
      name,
      email,
      password,role
    });

    return userUpdated;
  }
}

module.exports = UsersUpdateRepository;
