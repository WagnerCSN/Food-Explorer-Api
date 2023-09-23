const knex = require("../../database/knex");

class TypeOfPlatesUpdateRepository {
  async findByTypeOfPlates(id) {
    const typeOfPlates = await knex("typeOfPlates").select("*").where("id", id).first();

    return typeOfPlates;
  }

  async findByTypeOfPlatesWithNameExist() {
    const typeOfPlatesWithNameExist = await knex("typeOfPlates").select("*");

    return typeOfPlatesWithNameExist;
  }

  async update({ name, id }) {
    const typeOfPlatesUpdated = await knex("typeOfPlates").where({ id }).update({name});

    return typeOfPlatesUpdated;
  }
}

module.exports = TypeOfPlatesUpdateRepository;