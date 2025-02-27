const TypeOfPlatesCreateService = require("../services/typeOfPlates/TypeOfPlatesCreateService");
const TypeOfPlatesRepository = require("../repositories/typeOfPlates/TypeOfPlatesRepository");
const TypeOfPlatesUpdateService = require("../services/typeOfPlates/TypeOfPlatesUpdateService");
const TypeOfPlatesUpdateRepository = require("../repositories/typeOfPlates/TypeOfPlatesUpdateRepository");
const TypeOfPlatesDeleteRepository = require("../repositories/typeOfPlates/TypeOfPlatesDeleteRepository");
const TypeOfPlatesDeleteService = require("../services/typeOfPlates/TypeOfPlatesDeleteService");
const TypeOfPlatesShowRepository = require("../repositories/typeOfPlates/TypeOfPlatesShowRepository");
const TypeOfPlatesShowService = require("../services/typeOfPlates/TypeOfPlatesShowService");
const TypeOfPlatesIndexRepository = require("../repositories/typeOfPlates/TypeOfPlatesIndexRepository");
const TypeOfPlatesIndexService = require("../services/typeOfPlates/TypeOfPlatesIndexService");

class TypeOfPlatesController {
  async create(request, response, next) {
    try {
      const { name } = request.body;

      const typeOfPlatesRepository = new TypeOfPlatesRepository();
      const typeOfPlatesCreateService = new TypeOfPlatesCreateService(
        typeOfPlatesRepository
      );
      await typeOfPlatesCreateService.execute({ name });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async show(request, response, next) {
    try {
      const { id } = request.params;

      const typeOfPlatesShowRepository = new TypeOfPlatesShowRepository();
      const typeOfPlatesShowService = new TypeOfPlatesShowService(
        typeOfPlatesShowRepository
      );
      const typeOfPlateShow = await typeOfPlatesShowService.execute({ id });

      return response.json(typeOfPlateShow);
    } catch (error) {
      next(error);
    }
  }

  async index(request, response, next) {
    try {
      const { id, name } = request.query;

      const typeOfPlatesIndexRepository = new TypeOfPlatesIndexRepository();
      const typeOfPlatesIndexService = new TypeOfPlatesIndexService(
        typeOfPlatesIndexRepository
      );
      const typeOfPlateSearch = await typeOfPlatesIndexService.execute({
        id,
        name,
      });

      return response.json(typeOfPlateSearch);
    } catch (error) {
      next(error);
    }
  }

  async update(request, response, next) {
    try {
      const { name } = request.body;

      const { id } = request.params;
      const typeOfPlatesUpdateRepository = new TypeOfPlatesUpdateRepository();
      const typeOfPlatesUpdateService = new TypeOfPlatesUpdateService(
        typeOfPlatesUpdateRepository
      );
      await typeOfPlatesUpdateService.execute({ name, id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      const typeOfPlatesDeleteRepository = new TypeOfPlatesDeleteRepository();
      const typeOfPlatesDeleteService = new TypeOfPlatesDeleteService(
        typeOfPlatesDeleteRepository
      );
      await typeOfPlatesDeleteService.execute({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TypeOfPlatesController;
