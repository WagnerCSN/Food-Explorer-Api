const AppError = require("../../utils/AppError");

class FavoritePlatesCreateService{
    constructor(favoritePlatesRepository){
        this.favoritePlatesRepository = favoritePlatesRepository;
    }

    async execute({user_id, plate_id}){
     
        const checkFavoritePlatesExist = await this.favoritePlatesRepository.findByFavoritePlate(user_id);
        const checkUserExist = await this.favoritePlatesRepository.findByUser(user_id);
        const checkPlateExist = await this.favoritePlatesRepository.findByPlate(plate_id);
        const plateFavorited = checkFavoritePlatesExist.find(plates => plates.plate_id===parseInt(plate_id))

        if(plateFavorited){
            throw new AppError("This dish is already a favorite!");
        }

        if (!checkUserExist) {
            throw new AppError("User does not exist!");
        }

        if (!checkPlateExist) {
            throw new AppError("Dish not found!");
        }
  
        const favoritePlatesCreated = await this.favoritePlatesRepository.create({user_id, plate_id});
        
        return favoritePlatesCreated;
    }
}

module.exports = FavoritePlatesCreateService;