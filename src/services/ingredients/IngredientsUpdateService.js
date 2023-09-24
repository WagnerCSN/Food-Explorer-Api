const AppError = require("../../utils/AppError");

class IngredientsUpdateService {
  constructor(ingredientsUpdateRepository) {
    this.ingredientsUpdateRepository = ingredientsUpdateRepository;
  }

  async execute({ name, id }) {
    const ingredients = await this.ingredientsUpdateRepository.findByIngredients(id);

    if (!ingredients) {
      throw new AppError("Ingredients not found!");
    }

    const ingredientsWithNameExist = await this.ingredientsUpdateRepository.findByIngredientsWithNameExist();
    const result = ingredientsWithNameExist.find((ingredients) => ingredients.name === name);

    if (result && result.id !== ingredients.id) {
      throw new AppError("This name is already in use!");
    }
    ingredients.name = name;

    const ingredientsUpdated = await this.ingredientsUpdateRepository.update({
      name: ingredients.name,
      id,
    });

    return ingredientsUpdated;
  }
}

module.exports = IngredientsUpdateService;