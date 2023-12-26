const PlatesRepository = require("../repositories/plates/PlatesRepository");
const PlatesCreateService = require("../services/plates/PlatesCreateService");
const PlatesUpdateService = require("../services/plates/PlatesUpdateService");
const PlatesUpdateRepository = require("../repositories/plates/PlatesUpdateRepository");
const PlatesDeleteRepository = require("../repositories/plates/PlatesDeleteRepository");
const PlatesDeleteService = require("../services/plates/PlatesDeleteService");
const PlatesShowRepository = require("../repositories/plates/PlatesShowRepository");
const PlatesShowService = require("../services/plates/PlatesShowService");
const PlatesIndexRepository = require("../repositories/plates/PlatesIndexRepository");
const PlatesIndexService = require("../services/plates/PlatesIndexService");

class PlatesController {
  async create(request, response, next) {
    try {
      const { name, description, cost, value, ingredients } = request.body;
      const { typeOfPlate_id } = request.query;

      const platesRepository = new PlatesRepository();
      const platesCreateService = new PlatesCreateService(platesRepository);

      return response.json(await platesCreateService.execute({
        name,
        description,
        cost,
        value,
        typeOfPlate_id,
        ingredients,
      }));
    } catch (error) {
      next(error);
    }
  }

  async show(request, response, next) {
    try {
      const { id } = request.params;
      const platesShowRepository = new PlatesShowRepository();
      const platesShowService = new PlatesShowService(platesShowRepository);
      const plateShow = await platesShowService.execute({ id });

      return response.json(plateShow);
    } catch (error) {
      next(error);
    }
  }

  async index(request, response, next) {
    try {
      const { name, typeOfPlate_name, ingredients_name } = request.query;

      const platesIndexRepository = new PlatesIndexRepository();
      const platesIndexService = new PlatesIndexService(platesIndexRepository);
      const platesSearch = await platesIndexService.execute({
        name,
        typeOfPlate_name,
        ingredients_name,
      });

      return response.json(platesSearch);
    } catch (error) {
      next(error);
    }
  }

  async update(request, response, next) {
    try {
      const { name, description, cost, value, image, typeOfPlate_id } =
        request.body;
        
      const { id } = request.params;
      const platesUpdateRepository = new PlatesUpdateRepository();
      const platesUpdateService = new PlatesUpdateService(
        platesUpdateRepository
      );
      await platesUpdateService.execute({
        name,
        description,
        cost,
        image,
        value,
        typeOfPlate_id,
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
      const platesDeleteRepository = new PlatesDeleteRepository();
      const platesDeleteService = new PlatesDeleteService(
        platesDeleteRepository
      );
      await platesDeleteService.execute({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PlatesController;
