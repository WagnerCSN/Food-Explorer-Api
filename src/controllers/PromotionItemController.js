class PromotionItemController{
    async create(request, response) {
        const { discount } = request.body;
        const { platesId, promotionId } = request.params;
        promotionItemRepository = new PromotionItemRepository();
        promotionItemCreateService = new PromotionItemCreateService(promotionItemRepository);
        await promotionItemCreateService.execute({discount, platesId, promotionId});

        response.json();

    }
  
    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        // const id = request.user.id;
        const { id } = request.params;
        const usersUpdateRepository = new UsersUpdateRepository();
        const usersUpdateService = new UsersUpdateService(usersUpdateRepository);
        await usersUpdateService.execute({
          name,
          email,
          password,
          old_password,
          id,
        });
    
        response.json();
      }
      
      async delete(request, response){
        const {id} = request.params;
    
        const usersDeleteRepository = new UsersDeleteRepository();
        const usersDeleteService = new UsersDeleteService(usersDeleteRepository);
        await usersDeleteService.execute({id});
    
        return response.json();
      }
}

module.exports = PromotionItemController;