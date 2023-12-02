const AppError = require("../../utils/AppError");

class PlatesCreateService {
  constructor(platesRepository) {
    this.platesRepository = platesRepository;
  }

  async execute({
    name,
    description,
    cost,
    value,
    typeOfPlate_id,
    ingredients,
  }) {
    const checkExistPlate = await this.platesRepository.findByName(name);
    const checkExistTypeOfPlate = await this.platesRepository.findByTypePlate(
      typeOfPlate_id
    );

    if (checkExistPlate) {
      throw new AppError("Exiting plate!");
    }

    if (!checkExistTypeOfPlate) {
      throw new AppError("No type of plate registered!");
    }

    const [plate_id] = await this.platesRepository.create({
      name,
      description,
      cost,
      value,
      typeOfPlate_id,
    });

      const handleIngredients = ingredients;
      const insertIngredient = handleIngredients.map(ingredient => {
              return{
                  name: ingredient.name,
                  plate_id: plate_id
              }
          });

      const ingredientCreated = await this.platesRepository.insertIngredients(insertIngredient);

      return {plate_id, ingredientCreated};
    }
}

module.exports = PlatesCreateService;
