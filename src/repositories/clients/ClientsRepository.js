const knex = require("../../database/knex");

class ClientsRepository {
  async findByName(name) {
    const checkUserExist = await knex("clients")
      .select("*")
      .where("name", name)
      .first();

    return checkUserExist;
  }

  async findByEmail(email) {
    const checkEmailExist = await knex("clients")
      .select("*")
      .where("email", email)
      .first();

    return checkEmailExist;
  }

  async create({ name, email, password }) {
    const userId = await knex("clients").insert({
      name,
      email,
      password,
    });

    return { id: userId };
  }
}

module.exports = ClientsRepository;
