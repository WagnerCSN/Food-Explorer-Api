const RestaurantRepository = require("../repositories/restaurant/RestaurantRepository");
const RestaurantCreateService = require("../services/restaurant/RestaurantCreateService");
const RestaurantUpdateService = require("../services/restaurant/RestaurantUpdateService");
const RestaurantUpdateRepository = require("../repositories/restaurant/RestaurantUpdateRepository");
const RestaurantShowRepository = require("../repositories/restaurant/RestaurantShowRepository");
const RestaurantShowService = require("../services/restaurant/RestaurantShowService");

class RestaurantController {
  async create(request, response, next) {
    try {
      const { name, fone, email, address, cnpj, city, state } = request.body;

      const restaurantRepository = new RestaurantRepository();
      const restaurantCreateService = new RestaurantCreateService(
        restaurantRepository
      );
      await restaurantCreateService.execute({
        name,
        fone,
        email,
        address,
        cnpj,
        city,
        state,
      });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async show(request, response, next) {
    try {
      const { id } = request.params;

      const restaurantShowRepository = new RestaurantShowRepository();
      const restaurantShowService = new RestaurantShowService(
        restaurantShowRepository
      );
      const restaurantShow = await restaurantShowService.execute({ id });

      return response.json(restaurantShow);
    } catch (error) {
      next(error);
    }
  }

  async update(request, response, next) {
    try {
      const { name, fone, email, address, cnpj, city, state } = request.body;
      const { id } = request.params;
      const restaurantUpdateRepository = new RestaurantUpdateRepository();
      const restaurantUpdateService = new RestaurantUpdateService(
        restaurantUpdateRepository
      );
      await restaurantUpdateService.execute({
        name,
        fone,
        email,
        address,
        cnpj,
        city,
        state,
        id,
      });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RestaurantController;
