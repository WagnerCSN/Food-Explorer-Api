const knex = require("../../database/knex");

class TypeOfPlatesUpdateRepository {
  async findByTypeOfPlates(id) {
    const typeOfPlates = await knex("typeOfPlates").select("*").where("id", id).first();

    return typeOfPlates;
  }

  async findByUsers() {
    const userWithEamilExist = await knex("users").select("*");

    return userWithEamilExist;
  }

  async update({ name, id }) {
    const typeOfPlatesUpdated = await knex("typeOfPlates").where({ id }).update({name});

    return typeOfPlatesUpdated;
  }
}

module.exports = TypeOfPlatesUpdateRepository;