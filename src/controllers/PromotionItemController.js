class PromotionItemController{
    async create(request, response) {
        const { discount } = request.body;
        const { platesId, promotionId } = request.params;
        promotionItemRepository = new PromotionItemRepository();
        promotionItemCreateService = new PromotionItemCreateService(promotionItemRepository);
        await promotionItemCreateService.execute({discount, platesId, promotionId});

        response.json();

    }
  
    async show(request, response) {
      
    }
  
    async index(request, response) {
     
    }
  
    async update(request, response){
      
    }
  
    async delete(request, response) {
      
    }
}

module.exports = PromotionItemController;