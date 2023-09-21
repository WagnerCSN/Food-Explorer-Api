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

class IngredientsController{
    async create(request, response) {
        const { name, image } = request.body;

        const ingredientsRepository = new IngredientsRepository();
        const ingredientsCreateService = new IngredientsCreateService(ingredientsRepository);
        await ingredientsCreateService.execute({name, image});

        response.json();
    }

    async show(request, response){
        const { id } = request.params;
    
        const ingredientsShowRepository = new IngredientsShowRepository();
        const ingredientsShowService = new IngredientsShowService(ingredientsShowRepository);
        const ingredientShow = await ingredientsShowService.execute({id});
        response.json(ingredientShow);
    
      }
    
      async index(request, response){
        const { id, name} = request.query;
    
        const ingredientsIndexRepository = new IngredientsIndexRepository();
        const ingredientsIndexService = new IngredientsIndexService(ingredientsIndexRepository);
        const ingredientSearch = await ingredientsIndexService.execute({id, name});
        response.json(ingredientSearch);
    
      }
  
    async update(request, response) {
        const { name, image } = request.body;
        // const id = request.user.id;
        const { id } = request.params;

        const ingredientsUpdateRepository = new IngredientsUpdateRepository();
        const ingredientsUpdateService = new IngredientsUpdateService(ingredientsUpdateRepository);
        await ingredientsUpdateService.execute({name, image, id});
    
        response.json();
      }
      
      async delete(request, response){
        const {id} = request.params;
    
        const ingredientsDeleteRepository = new IngredientsDeleteRepository();
        const ingredientsDeleteService = new IngredientsDeleteService(ingredientsDeleteRepository);
        await ingredientsDeleteService.execute({id});
    
        return response.json();
      }
}

module.exports = IngredientsController;