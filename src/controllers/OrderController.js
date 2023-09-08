class OrderController {
  async create(request, response) {
    const {status, qtdeOfItems, totalOrderValue, date} = request.body;
    const { orderedItemId, clientsId } = request.params;

    orderRepository = new OrderRepository();
    orderCreateService = new OrderCreateService(orderRepository);
    await orderCreateService.execute({status, qtdeOfItems, totalOrderValue, date, orderedItemId, clientsId});

    response.json();
  }

  async show(request, response) {
    response.json();
  }

  async index(request, response) {
    response.json();
  }

  async delete(request, response) {
    response.json();
  }
}

module.exports = OrderController;
