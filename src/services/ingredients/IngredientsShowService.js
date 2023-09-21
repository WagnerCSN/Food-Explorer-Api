const AppError = require("../../utils/AppError");

class IngredientsShowService{
    constructor(ingredientsShowRepository){
        this.ingredientsShowRepository = ingredientsShowRepository;
    }

    async execute({id}){
        const checkIngredientsWithId = await this.ingredientsShowRepository.show(id);

        if(!checkIngredientsWithId){
            throw new AppError("There is no ingredients with this id!");
        }

        return checkIngredientsWithId;
    }

}

module.exports = IngredientsShowService;