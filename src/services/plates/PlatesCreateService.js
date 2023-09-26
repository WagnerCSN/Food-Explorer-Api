const AppError = require("../../utils/AppError");

class PlatesCreateService {
  constructor(platesRepository) {
    this.platesRepository = platesRepository;
  }

  async execute({
    name,
    description,
    cost,
    image,
    typeOfPlate_id,
    ingredient_id,
  }) {
    const checkExistPlate = await this.platesRepository.findByName(name);
    const checkExistTypeOfPlate = await this.platesRepository.findByTypePlate(
      typeOfPlate_id
    );
    const checkExistIngredient = await this.platesRepository.findByIngredient(
      ingredient_id
    );

    if (checkExistPlate) {
      throw new AppError("Exiting plate!");
    }

    if (!checkExistTypeOfPlate) {
      throw new AppError("No type of plate registered!");
    }

    if (!checkExistIngredient) {
      throw new AppError("No ingredient registered!");
    }

    const [plateCreated] = await this.platesRepository.create({
      name,
      description,
      cost,
      image,
      typeOfPlate_id,
      ingredient_id,
    });

    return plateCreated;
  }
}

module.exports = PlatesCreateService;
