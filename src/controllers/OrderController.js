const OrderRepository = require("../repositories/order/OrderRepository");
const OrderCreateService = require("../services/order/OrderCreateService");
// const OrderUpdateService = require("../services/order/OrderUpdateService");
// const OrderUpdateRepository = require("../repositories/order/OrderUpdateRepository");
// const OrderDeleteRepository = require("../repositories/order/OrderDeleteRepository");
// const OrderDeleteService = require("../services/order/OrderDeleteService");
// const OrderShowRepository = require("../repositories/order/OrderShowRepository");
// const OrderShowService = require("../services/order/OrderShowService");
// const OrderIndexRepository = require("../repositories/order/OrderIndexRepository");
// const OrderIndexService = require("../services/order/OrderIndexService");

class OrderController {
  async create(request, response) {
    const {status, orderedItem, amount} = request.body;
    const { user_id } = request.params;

    const orderRepository = new OrderRepository();
    const orderCreateService = new OrderCreateService(orderRepository);
    await orderCreateService.execute({status, orderedItem,amount, user_id});

    response.json();
  }

  // async update(request, response) {
  //   const { name, email, password, old_password } = request.body;
  //   // const id = request.user.id;
  //   const { id } = request.params;
  //   const usersUpdateRepository = new UsersUpdateRepository();
  //   const usersUpdateService = new UsersUpdateService(usersUpdateRepository);
  //   await usersUpdateService.execute({
  //     name,
  //     email,
  //     password,
  //     old_password,
  //     id,
  //   });

  //   response.json();
  // }
  
  // async delete(request, response){
  //   const {id} = request.params;

  //   const usersDeleteRepository = new UsersDeleteRepository();
  //   const usersDeleteService = new UsersDeleteService(usersDeleteRepository);
  //   await usersDeleteService.execute({id});

  //   return response.json();
  // }
}

module.exports = OrderController;
