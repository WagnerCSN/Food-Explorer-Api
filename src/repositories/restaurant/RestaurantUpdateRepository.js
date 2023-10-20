const knex = require("../../database/knex");

class RestaurantUpdateRepository {
  async findByRestaurant(id) {
    const restaurant = await knex("restaurant").select("*").where("id", id).first();

    return restaurant;
  }

  async update({ name, fone, email, address, cnpj, city, state, id }) {
    const restaurantUpdated = await knex("restaurant").where({ id }).update({name, fone, email, address, cnpj, city, state});

    return restaurantUpdated;
  }
}

module.exports = RestaurantUpdateRepository;