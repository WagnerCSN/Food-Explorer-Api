const AppError = require("../../utils/AppError");

class FavoritePlatesShowService{
    constructor(favoritePlatesShowRepository){
        this.favoritePlatesShowRepository = favoritePlatesShowRepository;
    }

    async execute({user_id}){
        const checkFavoritePlatesWithUser = await this.favoritePlatesShowRepository.show(user_id);
        
        const result = checkFavoritePlatesWithUser.length;
        
            
        // if(result===0){
        //     throw new AppError("There is no favorite Plates with this user!");
        // }
        return checkFavoritePlatesWithUser;
    }

}

module.exports = FavoritePlatesShowService;