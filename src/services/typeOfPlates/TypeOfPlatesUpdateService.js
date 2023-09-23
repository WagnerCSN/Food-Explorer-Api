const AppError = require("../../utils/AppError");

class TypeOfPlatesUpdateService {
  constructor(typeOfPlatesUpdateRepository) {
    this.typeOfPlatesUpdateRepository = typeOfPlatesUpdateRepository;
  }

  async execute({ name, id }) {
    const typeOfPlates = await this.typeOfPlatesUpdateRepository.findByTypeOfPlates(id);

    if (!typeOfPlates) {
      throw new AppError("Type Of Plates not found!");
    }

    const typeOfPlatesWithNameExist = await this.typeOfPlatesUpdateRepository.findByTypeOfPlatesWithNameExist();
    const result = typeOfPlatesWithNameExist.find((typeOfPlates) => typeOfPlates.name === name);

    if (result && result.id !== typeOfPlates.id) {
      throw new AppError("This name is already in use!");
    }
    typeOfPlates.name = name;

    const typeOfPlatesUpdated = await this.typeOfPlatesUpdateRepository.update({
      name: typeOfPlates.name,
      id,
    });

    return typeOfPlatesUpdated;
  }
}

module.exports = TypeOfPlatesUpdateService;