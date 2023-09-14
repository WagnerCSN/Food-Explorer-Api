const knex = require("../../database/knex");

class UsersRepository {
  async findByName(name) {
    const checkUserExist = await knex("users")
      .select("*")
      .where("name", name)
      .first();

    return checkUserExist;
  }

  async findByEmail(email) {
    const checkEmailExist = await knex("users")
      .select("*")
      .where("email", email)
      .first();

    return checkEmailExist;
  }

  async create({ name, email, password }) {
    const user_id = await knex("users").insert({
      name,
      email,
      password,
    });

    return { id: user_id };
  }
}

module.exports = UsersRepository;
