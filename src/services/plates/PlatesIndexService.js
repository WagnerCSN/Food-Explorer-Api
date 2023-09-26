const AppError = require("../../utils/AppError");

class PlatesIndexService{
    constructor(platesIndexRepository){
        this.platesIndexRepository = platesIndexRepository;
    }

    async execute({name, cost, typeOfPlate_id, ingredient_id}){
        if(name){
            const platesIndexName = await this.platesIndexRepository.indexByName(name);
            if(platesIndexName.length ===0){
                throw new AppError("Enter a valid name!");
            }
            return platesIndexName;
        }
            
        if(cost){
            const platesIndexCost = await this.platesIndexRepository.indexByCost(cost);
            if(platesIndexCost.length ===0){
                throw new AppError("Enter a valid cost!");
            }
            return platesIndexCost;
        }

        if(typeOfPlate_id){
            const platesIndexTypeOfPlate = await this.platesIndexRepository.indexByTypeOfPlates(typeOfPlate_id);
            if(platesIndexTypeOfPlate.length ===0){
                throw new AppError("Enter a valid type Of Plate!");
            }
            return platesIndexTypeOfPlate;
        }

        if(ingredient_id){
            const platesIndexIngredient = await this.platesIndexRepository.indexByIngredients(ingredient_id);
            if(platesIndexIngredient.length ===0){
                throw new AppError("Enter a valid ingredient!");
            }
            return platesIndexIngredient;
        }
    }
}

module.exports = PlatesIndexService;