const AppError = require("../../utils/AppError");

class RestaurantUpdateService {
  constructor(restaurantUpdateRepository) {
    this.restaurantUpdateRepository = restaurantUpdateRepository;
  }

  async execute({ name, fone, email, address, image, cnpj, city, state, id }) {
    const restaurant = await this.restaurantUpdateRepository.findByrestaurant(id);

    if (!restaurant) {
      throw new AppError("Type Of Plates not found!");
    }

    restaurant.name = name;
    restaurant.fone = fone;
    restaurant.email = email;
    restaurant.address = address;
    restaurant.image = image;
    restaurant.cnpj = cnpj;
    restaurant.city = city;
    restaurant.state = state;

    const restaurantUpdated = await this.restaurantUpdateRepository.update({
      name: restaurant.name,
      fone: restaurant.fone, 
      email: restaurant.email, 
      address: restaurant.address, 
      image: restaurant.image, 
      cnpj: restaurant.cnpj, 
      city: restaurant.city, 
      state: restaurant.state, 
      id,
    });

    return restaurantUpdated;
  }
}

module.exports = RestaurantUpdateService;