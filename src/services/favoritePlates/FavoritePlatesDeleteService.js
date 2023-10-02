const AppError = require("../../utils/AppError");

class FavoritePlatesDeleteService{
    constructor(favoritePlatesDeleteRepository){
        this.favoritePlatesDeleteRepository = favoritePlatesDeleteRepository;
    }

    async execute({id}){
        const checkFavoriteExist = await this.favoritePlatesDeleteRepository.findByFavorite(id);

        if(!checkFavoriteExist){
            throw new AppError("This Favorite does not have!");
        }

        await this.favoritePlatesDeleteRepository.deleteFavorite(id);

       

    }
}
module.exports = FavoritePlatesDeleteService;