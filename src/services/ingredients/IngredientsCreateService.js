const AppError = require("../../utils/AppError");

class IngredientsCreateService{
    constructor(ingredientsRepository){
        this.ingredientsRepository = ingredientsRepository;
    }

    async execute({ingredients, plate_id}){
        console.log("nro plato", plate_id)
        if(ingredients){
            const handleIngredients = ingredients;
            const selectIngredientExist = await this.ingredientsRepository.findByName();
            const insertIngredient = handleIngredients.map(ingredient => {
                const checkIngredientExist = selectIngredientExist.find(ingredientExist => ingredientExist.name === ingredient.name);
                
                    return{
                        name: ingredient.name,
                        plate_id
                    }
                
            });
    
            const ingredientCreated = await this.ingredientsRepository.create(insertIngredient);
            return ingredientCreated;
        }
    }
}

module.exports = IngredientsCreateService;