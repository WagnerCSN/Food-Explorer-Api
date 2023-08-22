class PromotionController{
    async create(request, response) {
        const { initialDate, finalDate, name} = request.body;

        promotionRepository = new PromotionRepository();
        promotionCreateService = new PromotionCreateService(promotionRepository);
        await promotionCreateService.execute({initialDate, finalDate, name});

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

module.exports = PromotionController;