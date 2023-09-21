const AppError = require("../../utils/AppError");

class IngredientsDeleteService{
    constructor(ingredientsDeleteRepository){
        this.ingredientsDeleteRepository = ingredientsDeleteRepository;
    }

    async execute({id}){
        const checkIngredientsExist = await this.ingredientsDeleteRepository.findByIngredient(id);

        if(!checkIngredientsExist){
            throw new AppError("This ingredient does not have!");
        }

        const deletedIngredient = await this.ingredientsDeleteRepository.deleteIngredient(id);

        if(deletedIngredient){
            throw new AppError("Successfully deleted");
        }

    }
}
module.exports = IngredientsDeleteService;