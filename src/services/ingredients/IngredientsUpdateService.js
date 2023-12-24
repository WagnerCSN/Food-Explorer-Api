const AppError = require("../../utils/AppError");

class IngredientsUpdateService {
  constructor(ingredientsUpdateRepository) {
    this.ingredientsUpdateRepository = ingredientsUpdateRepository;
  }

  async execute({ ingredients, plate_id }) {
    const deleted = await this.ingredientsUpdateRepository.deletedIngredients(plate_id);

    const insertIngredient = ingredients.map(ingredient => {
              return{
                  name: ingredient.name,
                  plate_id: plate_id
              }
          });


    const ingredientCreated=  await this.ingredientsUpdateRepository.insertIngredients(insertIngredient);

      return ingredientCreated;
  }
}

module.exports = IngredientsUpdateService;