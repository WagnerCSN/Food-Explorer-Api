const RestaurantImageUpdateRepository = require("../repositories/restaurantImage/RestaurantImageUpdateRepository");
const RestaurantImageUpdateService = require("../services/restaurantImage/RestaurantImageUpdateService");

class RestaurantImageController{
async update(request, response, next) {
    try {
        const {id} = request.params;
        const imageFileName = request.file.filename;

      const restaurantImageUpdateRepository = new RestaurantImageUpdateRepository();
      const restaurantImageUpdateService = new RestaurantImageUpdateService(restaurantImageUpdateRepository);
      await restaurantImageUpdateService.execute({id, imageFileName
       
      });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RestaurantImageController;