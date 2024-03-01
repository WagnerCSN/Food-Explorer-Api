const OrderRepository = require("../repositories/order/OrderRepository");
const OrderCreateService = require("../services/order/OrderCreateService");
const OrderDeleteRepository = require("../repositories/order/OrderDeleteRepository");
const OrderDeleteService = require("../services/order/OrderDeleteService");
const OrderShowRepository = require("../repositories/order/OrderShowRepository");
const OrderShowService = require("../services/order/OrderShowService");
const OrderIndexRepository = require("../repositories/order/OrderIndexRepository");
const OrderIndexService = require("../services/order/OrderIndexService");
const OrderUpdateService = require("../services/order/OrderUpdateService");
const OrderUpdateRepository = require("../repositories/order/OrderUpdateRepository");

class OrderController {
  async create(request, response, next) {
    try {
      const { status, orderedItem } = request.body;
      const user_id = request.user.id;
      console.log(user_id);
      const orderRepository = new OrderRepository();
      const orderCreateService = new OrderCreateService(orderRepository);
      const result = await orderCreateService.execute({ status, orderedItem, user_id });

      return response.json(result);
    } catch (error) {
      next(error);
    }
  }

  async show(request, response, next) {
    try {
      const { id } = request.params;

      const orderShowRepository = new OrderShowRepository();
      const orderShowService = new OrderShowService(orderShowRepository);
      const orderShow = await orderShowService.execute({ id });

      return response.json(orderShow);
    } catch (error) {
      next(error);
    }
  }

  async index(request, response, next) {
    try {
      const { name_user, bestDish, from, to } = request.query;
      const user_id = request.user.id;
      const orderIndexRepository = new OrderIndexRepository();
      const orderIndexService = new OrderIndexService(orderIndexRepository);
      const orderSearch = await orderIndexService.execute({ name_user, user_id, bestDish, from, to });

      return response.json(orderSearch);
    } catch (error) {
      next(error);
    }
  }

  async update(request, response, next) {
    try {
      const { status } = request.body;
      const id = request.params;
      
      const orderUpdateRepository = new OrderUpdateRepository();
      const orderUpdateService = new OrderUpdateService(
        orderUpdateRepository
      );
      await orderUpdateService.execute({
        status,
        id,
      });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      const orderDeleteRepository = new OrderDeleteRepository();
      const orderDeleteService = new OrderDeleteService(orderDeleteRepository);
      await orderDeleteService.execute({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrderController;
