const CheckoutSessionRepository = require("../repositories/checkoutSession/CheckoutSessionRepository");
const CheckoutSessionCreateService = require("../services/checkoutSession/CheckoutSessionCreateService");

class CheckoutSessionController {
  async create(request, response, next) {
    try {
      const { cartItems, order_id } = request.body;
      const user_id = request.user.id;

      const checkoutSessionRepository = new CheckoutSessionRepository();
      const checkoutSessionCreateService = new CheckoutSessionCreateService(checkoutSessionRepository);
      
      
      return response.send(await checkoutSessionCreateService.execute({cartItems, order_id, user_id})).end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CheckoutSessionController;
