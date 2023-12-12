const AppError = require("../../utils/AppError");

class OrderUpdateService {
  constructor(orderUpdateRepository) {
    this.orderUpdateRepository = orderUpdateRepository;
  }

  async execute({ status, id }) {
    const order = await this.orderUpdateRepository.findByOrder(id);

    if (!order) {
      throw new AppError("order not found!");
    }

    order.status = status;
    order.orderedItem = orderedItem;
    const orderUpdated = await this.orderUpdateRepository.update({
      status: order.status,
      id,
    });

    return orderUpdated;
  }
}

module.exports = OrderUpdateService;