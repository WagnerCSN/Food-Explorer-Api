const CheckoutSessionRepository = require("../repositories/checkoutSession/CheckoutSessionRepository");
const CheckoutSessionCreateService = require("../services/checkoutSession/CheckoutSessionCreateService");
// const CheckoutSessionUpdateService = require("../services/checkoutSession/CheckoutSessionUpdateService");
// const CheckoutSessionUpdateRepository = require("../repositories/checkoutSession/CheckoutSessionUpdateRepository");
// const CheckoutSessionDeleteRepository = require("../repositories/checkoutSession/CheckoutSessionDeleteRepository");
// const CheckoutSessionDeleteService = require("../services/checkoutSession/CheckoutSessionDeleteService");
// const CheckoutSessionShowRepository = require("../repositories/checkoutSession/CheckoutSessionShowRepository");
// const CheckoutSessionShowService = require("../services/checkoutSession/CheckoutSessionShowService");
// const CheckoutSessionIndexRepository = require("../repositories/checkoutSession/CheckoutSessionIndexRepository");
// const CheckoutSessionIndexService = require("../services/checkoutSession/CheckoutSessionIndexService");

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

//   async show(request, response, next) {
//     try {
//       const { id } = request.params;

//       const checkoutSessionShowRepository = new CheckoutSessionShowRepository();
//       const checkoutSessionShowService = new CheckoutSessionShowService(checkoutSessionShowRepository);
//       const checkoutSessionhow = await CheckoutSessionShowService.execute({ id });

//       return response.json(plateShow);
//     } catch (error) {
//       next(error);
//     }
//   }

//   async index(request, response, next) {
//     try {
//       const { name, typeOfPlate_name, ingredients_name } = request.query;

//       const platesIndexRepository = new PlatesIndexRepository();
//       const platesIndexService = new PlatesIndexService(platesIndexRepository);
//       const platesSearch = await platesIndexService.execute({
//         name,
//         typeOfPlate_name,
//         ingredients_name,
//       });

//       return response.json(platesSearch);
//     } catch (error) {
//       next(error);
//     }
//   }

//   async update(request, response, next) {
//     try {
//       const { name, description, cost, image, typeOfPlate_id, ingredient_id } =
//         request.body;
//       const { id } = request.params;

//       const platesUpdateRepository = new PlatesUpdateRepository();
//       const platesUpdateService = new PlatesUpdateService(
//         platesUpdateRepository
//       );
//       await platesUpdateService.execute({
//         name,
//         description,
//         cost,
//         image,
//         typeOfPlate_id,
//         ingredient_id,
//         id,
//       });

//       return response.json();
//     } catch (error) {
//       next(error);
//     }
//   }

//   async delete(request, response, next) {
//     try {
//       const { id } = request.params;

//       const platesDeleteRepository = new PlatesDeleteRepository();
//       const platesDeleteService = new PlatesDeleteService(
//         platesDeleteRepository
//       );
//       await platesDeleteService.execute({ id });

//       return response.json();
//     } catch (error) {
//       next(error);
//     }
//   }
   }

module.exports = CheckoutSessionController;
