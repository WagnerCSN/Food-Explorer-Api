const IngredientsImageUpdateRepository = require("../repositories/ingredientsImage/IngredientsImageUpdateRepository");
const IngredientsImageUpdateService = require("../services/ingredientsImage/IngredientsImageUpdateService");

class IngredientsImageController{
async update(request, response, next) {
    try {
        const {id} = request.params;
        const imageFileName = request.file.filename;

      const ingredientsImageUpdateRepository = new IngredientsImageUpdateRepository();
      const ingredientsImageUpdateService = new IngredientsImageUpdateService(ingredientsImageUpdateRepository);
      await ingredientsImageUpdateService.execute({id, imageFileName
       
      });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = IngredientsImageController;