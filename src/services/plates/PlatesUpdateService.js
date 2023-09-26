const AppError = require("../../utils/AppError");

class PlatesUpdateService {
  constructor(platesUpdateRepository) {
    this.platesUpdateRepository = platesUpdateRepository;
  }

  async execute({ name, description, cost, image, typeOfPlate_id, ingredient_id, id }) {
    const plates = await this.platesUpdateRepository.findByPlates(id);
    const checkExistTypeOfPlate = await this.platesUpdateRepository.findByTypePlate(typeOfPlate_id);
    const checkExistIngredient = await this.platesUpdateRepository.findByIngredient(ingredient_id);

    if (!plates) {
      throw new AppError("Plates not found");
    }

    if (!checkExistTypeOfPlate) {
        throw new AppError("No type of plate registered!");
    }
  
    if (!checkExistIngredient) {
        throw new AppError("No ingredient registered!");
    }

    const platesWithNameExist = await this.platesUpdateRepository.findByPlatesWithNameExist();
    const result = platesWithNameExist.find((plate) => plate.name === name);

    if (result && result.id !== plates.id) {
      throw new AppError("This name is already in use!");
    }

    plates.name = name;
    plates.description = description; 
    plates.cost = cost; 
    plates.image = image; 
    plates.typeOfPlate_id = typeOfPlate_id; 
    plates.ingredient_id = ingredient_id;

    const updatePlates = await this.platesUpdateRepository.update({
      name: plates.name,
      description: plates.description,
      cost: plates.cost,
      image: plates.image,
      typeOfPlate_id: plates.typeOfPlate_id,
      ingredient_id: plates.ingredient_id,
      id,
    });

    return updatePlates;
  }
}

module.exports = PlatesUpdateService;