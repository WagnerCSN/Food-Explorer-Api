const AppError = require("../../utils/AppError");

class IngredientsCreateService{
    constructor(ingredientsReposirory){
        this.ingredientsReposirory = ingredientsReposirory;
    }

    async execute({name, image}){
        const checkIngredientExist = await this.ingredientsReposirory.findByName(name);

        if(checkIngredientExist){
            throw new AppError("Existing ingredient!")
        }

        const ingredientCreated = await this.ingredientsReposirory.create({
            name,
            image
        })

        return ingredientCreated;
    }

}

module.exports = IngredientsCreateService;