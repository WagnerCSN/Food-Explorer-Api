const RestaurantRepository = require("../repositories/restaurant/RestaurantRepository");
const RestaurantCreateService = require("../services/restaurant/RestaurantCreateService");
const RestaurantUpdateService = require("../services/restaurant/RestaurantUpdateService");
const RestaurantUpdateRepository = require("../repositories/restaurant/RestaurantUpdateRepository");
const RestaurantShowRepository = require("../repositories/restaurant/RestaurantShowRepository");
const RestaurantShowService = require("../services/restaurant/RestaurantShowService");

class RestaurantController{
    async create(request, response) {
        const { name, fone, email, address, image, cnpj, city, state} = request.body;

        const restaurantRepository = new RestaurantRepository();
        const restaurantCreateService = new RestaurantCreateService(restaurantRepository);
        await restaurantCreateService.execute({name, fone, email, address, image, cnpj, city, state});

        response.json();

    }

    async show(request, response){
        const { id } = request.params;
    
        const restaurantShowRepository = new RestaurantShowRepository();
        const restaurantShowService = new RestaurantShowService(restaurantShowRepository);
        const restaurantShow = await restaurantShowService.execute({id});
        response.json(restaurantShow);
    
      }
  
    async update(request, response) {
        const { name, fone, email, address, image, cnpj, city, state } = request.body;
        // const id = request.user.id;
        const { id } = request.params;
        const restaurantUpdateRepository = new RestaurantUpdateRepository();
        const restaurantUpdateService = new RestaurantUpdateService(restaurantUpdateRepository);
        await restaurantUpdateService.execute({name, fone, email, address, image, cnpj, city, state, id});
    
        response.json();
      }
}

module.exports = RestaurantController;