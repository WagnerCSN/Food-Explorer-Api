const AppError = require("../../utils/AppError");

class IngredientsIndexService{
    constructor(ingredientsIndexRepository){
        this.ingredientsIndexRepository = ingredientsIndexRepository;
    }

    async execute({name, id}){
        if(name){
            const ingredientsIndexName = await this.ingredientsIndexRepository.indexByName(name);
            if(ingredientsIndexName.length ===0){
                throw new AppError("Enter a valid name!");
            }
            return ingredientsIndexName;
        }

        if(id){
            const ingredientsIndexPlate_id = await this.ingredientsIndexRepository.indexByPlateWithIngredients(id);
            if(ingredientsIndexPlate_id.length ===0){
                throw new AppError("No ingredient!");
            }
            return ingredientsIndexPlate_id;
        }
    }
}

module.exports = IngredientsIndexService;