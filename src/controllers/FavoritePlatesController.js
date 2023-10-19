const FavoritePlatesRepository = require("../repositories/favoritePlates/FavoritePlatesRepository");
const FavoritePlatesCreateService = require("../services/favoritePlates/FavoritePlatesCreateService");
const FavoritePlatesDeleteRepository = require("../repositories/favoritePlates/FavoritePlatesDeleteRepository");
const FavoritePlatesDeleteService = require("../services/favoritePlates/FavoritePlatesDeleteService");
const FavoritePlatesShowRepository = require("../repositories/favoritePlates/FavoritePlatesShowRepository");
const FavoritePlatesShowService = require("../services/favoritePlates/FavoritePlatesShowService");
const FavoritePlatesIndexRepository = require("../repositories/favoritePlates/FavoritePlatesIndexRepository");
const FavoritePlatesIndexService = require("../services/favoritePlates/FavoritePlatesIndexService");

class FavoritePlatesController {
  async create(request, response, next) {
    try {
      const { plate_id } = request.query;
      const user_id = request.user.id;
      const favoritePlatesReporitory = new FavoritePlatesRepository();
      const favoritePlatesCreateService = new FavoritePlatesCreateService(
        favoritePlatesReporitory
      );
      await favoritePlatesCreateService.execute({ user_id, plate_id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async show(request, response, next) {
    try {
      const user_id = request.user.id;

      const favoritePlatesShowRepository = new FavoritePlatesShowRepository();
      const favoritePlatesShowService = new FavoritePlatesShowService(
        favoritePlatesShowRepository
      );
      const favoritePlateshow = await favoritePlatesShowService.execute({
        user_id,
      });

      return response.json(favoritePlateshow);
    } catch (error) {
      next(error);
    }
  }

  async index(request, response, next) {
    try {
      const { name_plates } = request.query;

      const favoritePlatesIndexRepository = new FavoritePlatesIndexRepository();
      const favoritePlatesIndexService = new FavoritePlatesIndexService(
        favoritePlatesIndexRepository
      );
      const favoritePlatesSearch = await favoritePlatesIndexService.execute({
        name_plates,
      });

      return response.json(favoritePlatesSearch);
    } catch (error) {
      next(error);
    }
  }

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      const favoritePlatesDeleteRepository =
        new FavoritePlatesDeleteRepository();
      const favoritePlatesDeleteService = new FavoritePlatesDeleteService(
        favoritePlatesDeleteRepository
      );
      await favoritePlatesDeleteService.execute({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FavoritePlatesController;
