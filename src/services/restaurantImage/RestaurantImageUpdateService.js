const AppError = require("../../utils/AppError");
const DiskStorage = require("../../providers/DiskStorage");

class RestaurantImageUpdateService {
  constructor(restaurantImageUpdateRepository) {
    this.restaurantImageUpdateRepository = restaurantImageUpdateRepository;
  }

  async execute({ id, imageFileName }) {
    const diskStorage = new DiskStorage();

    const restaurant = await this.restaurantImageUpdateRepository.findByRestaurant(id);

    if (restaurant.image) {
      await diskStorage.deleteFile(restaurant.image);
    }

    const filename = await diskStorage.saveFile(imageFileName);
    restaurant.image = filename;

    const updatedRestaurant = this.restaurantImageUpdateRepository.update({
      restaurant,
      id,
    });

    return updatedRestaurant;
  }
}

module.exports = RestaurantImageUpdateService;