const OrderRepository = require("../repositories/order/OrderRepository");
const OrderCreateService = require("../services/order/OrderCreateService");
const OrderDeleteRepository = require("../repositories/order/OrderDeleteRepository");
const OrderDeleteService = require("../services/order/OrderDeleteService");
const OrderShowRepository = require("../repositories/order/OrderShowRepository");
const OrderShowService = require("../services/order/OrderShowService");
const OrderIndexRepository = require("../repositories/order/OrderIndexRepository");
const OrderIndexService = require("../services/order/OrderIndexService");

class OrderController {
  async create(request, response) {
    const {status, orderedItem} = request.body;
    const { user_id } = request.params;

    const orderRepository = new OrderRepository();
    const orderCreateService = new OrderCreateService(orderRepository);
    await orderCreateService.execute({status, orderedItem, user_id});

    response.json();
  }

  async show(request, response){
    const { id } = request.params;

    const orderShowRepository = new OrderShowRepository();
    const orderShowService = new OrderShowService(orderShowRepository);
    const orderShow = await orderShowService.execute({id});
    response.json(orderShow);

  }

  async index(request, response){
    const { name_user, bestSellingDish } = request.query;

    const orderIndexRepository = new OrderIndexRepository();
    const orderIndexService = new OrderIndexService(orderIndexRepository);
    const orderSearch = await orderIndexService.execute({name_user, bestSellingDish});
    response.json(orderSearch);

  }
  
  async delete(request, response){
    const {id} = request.params;

    const orderDeleteRepository = new OrderDeleteRepository();
    const orderDeleteService = new OrderDeleteService(orderDeleteRepository);
    await orderDeleteService.execute({id});

    return response.json();
  }
}

module.exports = OrderController;
