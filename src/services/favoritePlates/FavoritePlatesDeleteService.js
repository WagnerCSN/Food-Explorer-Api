const AppError = require("../../utils/AppError");

class FavoritePlatesDeleteService{
    constructor(favoritePlatesDeleteRepository){
        this.favoritePlatesDeleteRepository = favoritePlatesDeleteRepository;
    }

    async execute({plate_id, user_id}){
        const platesWithUser = await this.favoritePlatesDeleteRepository.findByPlatesWithUser(user_id);
        const result = platesWithUser.filter(a =>a.plate_id===parseInt(plate_id))
        
        const plateRemoved = result[0];

        const deletedFavorite = await this.favoritePlatesDeleteRepository.deleteFavorite({id: plateRemoved.id});

        if(deletedFavorite){
           throw new AppError("Successfully deleted");
        }
    }
}
module.exports = FavoritePlatesDeleteService;