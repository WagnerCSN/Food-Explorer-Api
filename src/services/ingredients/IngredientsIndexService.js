const AppError = require("../../utils/AppError");

class IngredientsIndexService{
    constructor(ingredientsIndexRepository){
        this.ingredientsIndexRepository = ingredientsIndexRepository;
    }

    async execute({name}){
        if(name){
            const ingredientsIndexName = await this.ingredientsIndexRepository.indexByName(name);
            if(ingredientsIndexName.length ===0){
                throw new AppError("Enter a valid name!");
            }
            return ingredientsIndexName;
        }
    }
}

module.exports = IngredientsIndexService;