const WebhookRepository = require("../repositories/webhook/WebhookRepository");
const WebhookCreateService = require("../services/webhook/WebhookCreateService");

class WebhookController {
  async create(request, response, next) {
    try {
      const buf = await request;
      const sig = request.headers['stripe-signature'];
      let endpointSecret;
      
      const webhookRepository = new WebhookRepository();
      const webhookCreateService = new WebhookCreateService(webhookRepository);
      await webhookCreateService.execute({sig, endpointSecret, buf});
      return response.end();
      
    } catch (error) {
      next(error);
    }
  }
   }

module.exports = WebhookController;
