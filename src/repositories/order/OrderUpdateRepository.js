const knex = require("../../database/knex");

class OrderUpdateRepository {
  async findByOrder(order_id) {
    const order = await knex("order").where({id: order_id}).first();

    return order;
  }

  async update({ status, order_id }) {
    const orderUpdated = await knex("order").where({id: order_id}).update({status});

    return orderUpdated;
  }
}

module.exports = OrderUpdateRepository;