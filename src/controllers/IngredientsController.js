class IngredientsController{
    async create(request, response) {
        const { name, image } = request.body;

        ingredientsRepository = new IngredientsRepository();
        ingredientsCreateService = new IngredientsCreateService(ingredientsRepository);
        await ingredientsCreateService.execute({name, image});

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

module.exports = IngredientsController;