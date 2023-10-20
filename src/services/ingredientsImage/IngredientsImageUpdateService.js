const AppError = require("../../utils/AppError");
const DiskStorage = require("../../providers/DiskStorage");

class IngredientsImageUpdateService {
  constructor(ingredientsImageUpdateRepository) {
    this.ingredientsImageUpdateRepository = ingredientsImageUpdateRepository;
  }

  async execute({ id, imageFileName }) {
    const diskStorage = new DiskStorage();
    const ingredients = await this.ingredientsImageUpdateRepository.findByIngredients(id);

    if (!ingredients) {
      throw new AppError(
        "Only authenticated ingredients can change their image",
        401
      );
    }

    if (ingredients.image) {
      await diskStorage.deleteFile(ingredients.image);
    }

    const filename = await diskStorage.saveFile(imageFileName);
    ingredients.image = filename;

    const updatedIngredients = this.ingredientsImageUpdateRepository.update({
      ingredients,
      id,
    });

    return updatedIngredients;
  }
}

module.exports = IngredientsImageUpdateService;