const knex = require("../../database/knex");

class OrderUpdateRepository {
  async findByorder(id) {
    const order = await knex("order").select("*").where("id", id).first();

    return order;
  }

  async update({ status, id }) {
    const orderUpdated = await knex("order").where({ id }).update({status});

    return orderUpdated;
  }
}

module.exports = OrderUpdateRepository;