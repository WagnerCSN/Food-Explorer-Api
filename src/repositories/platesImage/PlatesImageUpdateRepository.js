const knex = require("../../database/knex");

class PlatesImageUpdateRepository {
    
    async findByDish(id) {
    const dish = await knex("plates").where({id}).first();

    return dish;
  }

  async update({ dish, id }) {

    const updatedDish = knex("plates").where({ id }).update(dish);

    return updatedDish;
  }
}
module.exports = PlatesImageUpdateRepository;