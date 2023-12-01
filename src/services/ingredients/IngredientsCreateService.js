const AppError = require("../../utils/AppError");

class IngredientsCreateService{
    constructor(ingredientsRepository){
        this.ingredientsRepository = ingredientsRepository;
    }

    async execute({ingredients}){
        if(ingredients){
            const handleIngredients = ingredients;
            const selectIngredientExist = await this.ingredientsRepository.findByName();
            const insertIngredient = handleIngredients.map(ingredient => {
                const checkIngredientExist = selectIngredientExist.find(ingredientExist => ingredientExist.name === ingredient.name);
                if(checkIngredientExist!==undefined){
                    throw new AppError("Existing ingredient!");
                }else{
                    return{
                        name: ingredient.name
                    }
                }
            });
    
            const ingredientCreated = await this.ingredientsRepository.create(insertIngredient);
            
            return ingredientCreated;
        }
    }
}

module.exports = IngredientsCreateService;