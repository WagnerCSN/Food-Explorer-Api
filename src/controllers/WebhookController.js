const WebhookRepository = require("../repositories/webhook/WebhookRepository");
const WebhookCreateService = require("../services/webhook/WebhookCreateService");

class WebhookController {
  async create(request, response, next) {
    try {
      await request;
      let sig = request.headers['stripe-signature'];
      let endpointSecret;
      
      const webhookRepository = new WebhookRepository();
      const webhookCreateService = new WebhookCreateService(webhookRepository);
       webhookCreateService.execute({sig, endpointSecret, request});
      return response.end();
      
    } catch (error) {
      next(error);
    }
  }
   }

module.exports = WebhookController;
