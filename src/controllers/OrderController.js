class OrderController {
  async create(request, response) {
    const {status, qtdeOfItems} = request.body;

    orderRepository = new OrderRepository();
    orderCreateService = new OrderCreateService(orderRepository);
    await orderCreateService.execute({status, qtdeOfItems});

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
