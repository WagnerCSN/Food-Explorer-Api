const AppError = require("../../utils/AppError");

class PlatesUpdateService {
  constructor(platesUpdateRepository) {
    this.platesUpdateRepository = platesUpdateRepository;
  }

  async execute({ name, description, cost, value, image, typeOfPlate_id, id }) {
    const plates = await this.platesUpdateRepository.findByPlates(id);
    const checkExistTypeOfPlate = await this.platesUpdateRepository.findByTypePlate(typeOfPlate_id);

    if (!plates) {
      throw new AppError("Plates not found");
    }

    if (!checkExistTypeOfPlate) {
        throw new AppError("No type of plate registered!");
    }
  
    const platesWithNameExist = await this.platesUpdateRepository.findByPlatesWithNameExist();
    const result = platesWithNameExist.find((plate) => plate.name === name);

    if (result && result.id !== plates.id) {
      throw new AppError("This name is already in use!");
    }

    plates.name = name;
    plates.description = description; 
    plates.cost = cost; 
    plates.value = value; 
    plates.image = image; 
    plates.typeOfPlate_id = typeOfPlate_id; 

    const updatePlates = await this.platesUpdateRepository.update({
      name: plates.name,
      description: plates.description,
      cost: plates.cost,
      value: plates.value,
      image: plates.image,
      typeOfPlate_id: plates.typeOfPlate_id,
      id,
    });

    return updatePlates;
  }
}

module.exports = PlatesUpdateService;