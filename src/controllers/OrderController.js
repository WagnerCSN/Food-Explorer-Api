class OrderController {
  async create(request, response) {
    const {status, qtdeOfItems, totalOrderValue, date} = request.body;
    const { orderedItemId, clients_id } = request.params;

    orderRepository = new OrderRepository();
    orderCreateService = new OrderCreateService(orderRepository);
    await orderCreateService.execute({status, qtdeOfItems, totalOrderValue, date, orderedItemId, clients_id});

    response.json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    // const id = request.user.id;
    const { id } = request.params;
    const usersUpdateRepository = new UsersUpdateRepository();
    const usersUpdateService = new UsersUpdateService(usersUpdateRepository);
    await usersUpdateService.execute({
      name,
      email,
      password,
      old_password,
      id,
    });

    response.json();
  }
  
  async delete(request, response){
    const {id} = request.params;

    const usersDeleteRepository = new UsersDeleteRepository();
    const usersDeleteService = new UsersDeleteService(usersDeleteRepository);
    await usersDeleteService.execute({id});

    return response.json();
  }
}

module.exports = OrderController;
