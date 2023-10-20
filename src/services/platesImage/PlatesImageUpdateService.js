const AppError = require("../../utils/AppError");
const DiskStorage = require("../../providers/DiskStorage");

class PlatesImageUpdateService {
  constructor(platesImageUpdateRepository) {
    this.platesImageUpdateRepository = platesImageUpdateRepository;
  }

  async execute({ id, imageFileName }) {
    const diskStorage = new DiskStorage();
    const dish = await this.platesImageUpdateRepository.findByDish(id);

    if (!dish) {
      throw new AppError(
        "Only authenticated dish can change their image",
        401
      );
    }

    if (dish.image) {
      await diskStorage.deleteFile(dish.image);
    }

    const filename = await diskStorage.saveFile(imageFileName);
    dish.image = filename;

    const updatedDish = this.platesImageUpdateRepository.update({
      dish,
      id,
    });

    return updatedDish;
  }
}

module.exports = PlatesImageUpdateService;