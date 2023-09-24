const AppError = require("../../utils/AppError");

class RestaurantShowService{
    constructor(restaurantShowRepository){
        this.restaurantShowRepository = restaurantShowRepository;
    }

    async execute({id}){
        const checkRestaurantWithId = await this.restaurantShowRepository.show(id);

        if(!checkRestaurantWithId){
            throw new AppError("There is no restaurant with this id!");
        }

        return checkRestaurantWithId;
    }

}

module.exports = RestaurantShowService;