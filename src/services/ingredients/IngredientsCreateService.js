const AppError = require("../../utils/AppError");

class IngredientsCreateService{
    constructor(ingredientsRepository){
        this.ingredientsRepository = ingredientsRepository;
    }

    async execute({name, image}){
        const checkIngredientExist = await this.ingredientsRepository.findByName(name);

        if(checkIngredientExist){
            throw new AppError("Existing ingredient!")
        }

        const ingredientCreated = await this.ingredientsRepository.create({
            name,
            image
        })

        return ingredientCreated;
    }

}

module.exports = IngredientsCreateService;