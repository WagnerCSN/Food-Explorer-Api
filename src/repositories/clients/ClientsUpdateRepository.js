const knex = require("../../database/knex");

class ClientsUpdateRepository {
  async findByUser(id) {
    const user = await knex("clients").select("*").where("id", id).first();

    return user;
  }

  async findByUsers() {
    const userWithEamilExist = await knex("clients").select("*");

    return userWithEamilExist;
  }

  async update({ name, email, password, id }) {
    const userUpdated = await knex("clients").where({ id }).update({
      name,
      email,
      password,
    });

    return userUpdated;
  }
}

module.exports = ClientsUpdateRepository;
