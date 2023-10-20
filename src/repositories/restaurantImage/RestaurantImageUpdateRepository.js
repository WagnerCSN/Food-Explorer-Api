const knex = require("../../database/knex");

class RestaurantImageUpdateRepository {
  async findByRestaurant(id) {
    const restaurant = await knex("restaurant").where({ id }).first();

    return restaurant;
  }

  async update({ restaurant, id }) {
    const updatedRestaurant = knex("restaurant")
      .where({ id })
      .update(restaurant);

    return updatedRestaurant;
  }
}
module.exports = RestaurantImageUpdateRepository;
