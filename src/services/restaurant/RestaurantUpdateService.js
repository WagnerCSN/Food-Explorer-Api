const AppError = require("../../utils/AppError");

class RestaurantUpdateService {
  constructor(restaurantUpdateRepository) {
    this.restaurantUpdateRepository = restaurantUpdateRepository;
  }

  async execute({ name, fone, email, address, cnpj, city, state, id }) {
    const restaurant = await this.restaurantUpdateRepository.findByRestaurant(id);

    restaurant.name = name;
    restaurant.fone = fone;
    restaurant.email = email;
    restaurant.address = address;
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