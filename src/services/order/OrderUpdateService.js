const AppError = require("../../utils/AppError");

class OrderUpdateService {
  constructor(orderUpdateRepository) {
    this.orderUpdateRepository = orderUpdateRepository;
  }

  async execute({ status, id }) {
    const order_id = id.id;
    const order = await this.orderUpdateRepository.findByOrder(order_id);
    console.log(order)

    if (!order) {
      throw new AppError("order not found!");
    }

    order.status = status;
    
    const orderUpdated = await this.orderUpdateRepository.update({
      status: order.status,
      order_id,
    });

    return orderUpdated;
  }
}

module.exports = OrderUpdateService;