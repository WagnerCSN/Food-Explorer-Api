const PromotionRepository = require("../repositories/promotion/PromotionRepository");
const PromotionCreateService = require("../services/promotion/PromotionCreateService");
const PromotionUpdateService = require("../services/promotion/PromotionUpdateService");
const PromotionUpdateRepository = require("../repositories/promotion/PromotionUpdateRepository");
const PromotionDeleteRepository = require("../repositories/promotion/PromotionDeleteRepository");
const PromotionDeleteService = require("../services/promotion/PromotionDeleteService");
const PromotionShowRepository = require("../repositories/promotion/PromotionShowRepository");
const PromotionShowService = require("../services/promotion/PromotionShowService");
const PromotionIndexRepository = require("../repositories/promotion/PromotionIndexRepository");
const PromotionIndexService = require("../services/promotion/PromotionIndexService");

class PromotionController {
  async create(request, response, next) {
    try {
      const { initialDate, finalDate, name, promotionItens } = request.body;
      const { plate_id } = request.params;

      const promotionRepository = new PromotionRepository();
      const promotionCreateService = new PromotionCreateService(
        promotionRepository
      );
      await promotionCreateService.execute({
        initialDate,
        finalDate,
        name,
        promotionItens,
        plate_id,
      });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async show(request, response, next) {
    try {
      const { id } = request.params;

      const promotionShowRepository = new PromotionShowRepository();
      const promotionShowService = new PromotionShowService(
        promotionShowRepository
      );
      const promotionShow = await promotionShowService.execute({ id });

      return response.json(promotionShow);
    } catch (error) {
      next(error);
    }
  }

  async index(request, response, next) {
    try {
      const { name_promotion, name_dish } = request.query;

      const promotionIndexRepository = new PromotionIndexRepository();
      const promotionIndexService = new PromotionIndexService(
        promotionIndexRepository
      );
      const promotionSearch = await promotionIndexService.execute({
        name_promotion,
        name_dish,
      });

      return response.json(promotionSearch);
    } catch (error) {
      next(error);
    }
  }

  async update(request, response, next) {
    try {
      const { name, promotionItens } = request.body;

      const { id } = request.params;

      const promotionUpdateRepository = new PromotionUpdateRepository();
      const promotionUpdateService = new PromotionUpdateService(
        promotionUpdateRepository
      );
      await promotionUpdateService.execute({ name, promotionItens, id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      const promotionDeleteRepository = new PromotionDeleteRepository();
      const promotionDeleteService = new PromotionDeleteService(
        promotionDeleteRepository
      );
      await promotionDeleteService.execute({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PromotionController;
