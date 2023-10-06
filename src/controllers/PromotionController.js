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

class PromotionController{
    async create(request, response) {
        const { initialDate, finalDate, name, promotionItens} = request.body;
        const { plate_id } = request.params;

        const promotionRepository = new PromotionRepository();
        const promotionCreateService = new PromotionCreateService(promotionRepository);
        await promotionCreateService.execute({initialDate, finalDate, name, promotionItens, plate_id});

        response.json();

    }
  
    async show(request, response){
      const { id } = request.params;
  
      const promotionShowRepository = new PromotionShowRepository();
      const promotionShowService = new PromotionShowService(promotionShowRepository);
      const promotionShow = await promotionShowService.execute({id});
      response.json(promotionShow);
  
    }
  
    async index(request, response){
      const { id, name_promotion, name_dish} = request.query;
  
      const promotionIndexRepository = new PromotionIndexRepository();
      const promotionIndexService = new PromotionIndexService(promotionIndexRepository);
      const promotionSearch = await promotionIndexService.execute({ id, name_promotion, name_dish});
      response.json(promotionSearch);
  
    }

    async update(request, response) {
        const { name, promotionItens } = request.body;
        // const id = request.user.id;
        const { id } = request.params;

        const promotionUpdateRepository = new PromotionUpdateRepository();
        const promotionUpdateService = new PromotionUpdateService(promotionUpdateRepository);
        await promotionUpdateService.execute({name, promotionItens, id});
    
        response.json();
      }
      
      async delete(request, response){
        const {id} = request.params;
    
        const promotionDeleteRepository = new PromotionDeleteRepository();
        const promotionDeleteService = new PromotionDeleteService(promotionDeleteRepository);
        await promotionDeleteService.execute({id});
    
        return response.json();
     }
}

module.exports = PromotionController;