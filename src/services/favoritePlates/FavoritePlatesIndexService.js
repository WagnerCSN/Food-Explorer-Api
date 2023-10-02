const AppError = require("../../utils/AppError");

class FavoritePlatesIndexService{
    constructor(favoritePlatesIndexRepository){
        this.favoritePlatesIndexRepository = favoritePlatesIndexRepository;
    }

    async execute({name_plates}){
        if(name_plates){
            const favoritePlatesIndexName = await this.favoritePlatesIndexRepository.indexByName(name_plates);
            if(favoritePlatesIndexName.length ===0){
                throw new AppError("Enter a valid plate name!");
            }
            return favoritePlatesIndexName;
        }
    }
}

module.exports = FavoritePlatesIndexService;