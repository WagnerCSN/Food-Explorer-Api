const IngredientsRepository = require("../repositories/ingredients/IngredientsRepository");
const IngredientsCreateService = require("../services/ingredients/IngredientsCreateService");
const IngredientsUpdateService = require("../services/ingredients/IngredientsUpdateService");
const IngredientsUpdateRepository = require("../repositories/ingredients/IngredientsUpdateRepository");
const IngredientsDeleteRepository = require("../repositories/ingredients/IngredientsDeleteRepository");
const IngredientsDeleteService = require("../services/ingredients/IngredientsDeleteService");
const IngredientsShowRepository = require("../repositories/ingredients/IngredientsShowRepository");
const IngredientsShowService = require("../services/ingredients/IngredientsShowService");
const IngredientsIndexRepository = require("../repositories/ingredients/IngredientsIndexRepository");
const IngredientsIndexService = require("../services/ingredients/IngredientsIndexService");

class IngredientsController {
  async create(request, response, next) {
    try {
      const { ingredients } = request.body;

      const ingredientsRepository = new IngredientsRepository();
      const ingredientsCreateService = new IngredientsCreateService(
        ingredientsRepository
      );
      await ingredientsCreateService.execute({ ingredients });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async show(request, response, next) {
    try {
      const { id } = request.params;

      const ingredientsShowRepository = new IngredientsShowRepository();
      const ingredientsShowService = new IngredientsShowService(
        ingredientsShowRepository
      );
      const ingredientShow = await ingredientsShowService.execute({ id });

      return response.json(ingredientShow);
    } catch (error) {
      next(error);
    }
  }

  async index(request, response, next) {
    try {
      const { id, name } = request.query;

      const ingredientsIndexRepository = new IngredientsIndexRepository();
      const ingredientsIndexService = new IngredientsIndexService(
        ingredientsIndexRepository
      );
      const ingredientSearch = await ingredientsIndexService.execute({
        id,
        name,
      });

      return response.json(ingredientSearch);
    } catch (error) {
      next(error);
    }
  }

  async update(request, response, next) {
    try {
      const { name, image } = request.body;

      const { id } = request.params;

      const ingredientsUpdateRepository = new IngredientsUpdateRepository();
      const ingredientsUpdateService = new IngredientsUpdateService(
        ingredientsUpdateRepository
      );
      await ingredientsUpdateService.execute({ name, image, id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      const ingredientsDeleteRepository = new IngredientsDeleteRepository();
      const ingredientsDeleteService = new IngredientsDeleteService(
        ingredientsDeleteRepository
      );
      await ingredientsDeleteService.execute({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = IngredientsController;
