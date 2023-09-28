const AppError = require("../../utils/AppError");

class PlatesIndexService{
    constructor(platesIndexRepository){
        this.platesIndexRepository = platesIndexRepository;
    }

    async execute({name, typeOfPlate_name, ingredients_name}){

        const typeid = await this.platesIndexRepository.selectByTypeOfPlates();
        const ingredient = await this.platesIndexRepository.selectByIngredients(); 

        if(name){
            const platesIndexName = await this.platesIndexRepository.indexByName(name);
            if(platesIndexName.length ===0){
                throw new AppError("Enter a valid name!");
            }
            
            const platesWithName = platesIndexName.map(plate => {
                const platesWithType = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const platesWithIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
                return{
                    name: plate.name, 
                    description: plate.description, 
                    cost: plate.cost, 
                    image: plate.image,
                    typeOfPlate: platesWithType.map(platesWithType => platesWithType.name).toString(),
                    ingredients: platesWithIngredient.map(platesWithIngredient => platesWithIngredient.name).toString()
                }
            });
           
             return platesWithName;
        }
            
       
        if(typeOfPlate_name){
            const platesIndexTypeOfPlate = await this.platesIndexRepository.indexByTypeOfPlates(typeOfPlate_name);
           
            if(platesIndexTypeOfPlate.length ===0){
                throw new AppError("Enter a valid type Of Plate!");
            }

            const platesWithType = platesIndexTypeOfPlate.map(plate => {
                const platesType = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const platesIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
            return{
                name: plate.name, 
                description: plate.description, 
                cost: plate.cost, 
                image: plate.image,
                typeOfPlate: platesType.map(platesType => platesType.name).toString(),
                ingredients: platesIngredient.map(platesIngredient => platesIngredient.name).toString()
            }
            });
           
             return platesWithType;
        }

        if(ingredients_name){
            const platesIndexIngredient = await this.platesIndexRepository.indexByIngredients(ingredients_name);
            if(platesIndexIngredient.length ===0){
                throw new AppError("Enter a valid ingredient!");
            }

            const platesWithIngredients = platesIndexIngredient.map(plate => {
                const platesType = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const platesIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
                return{
                    name: plate.name, 
                    description: plate.description, 
                    cost: plate.cost, 
                    image: plate.image,
                    typeOfPlate: platesType.map(platesType => platesType.name).toString(),
                    ingredients: platesIngredient.map(platesIngredient => platesIngredient.name).toString()
                }
            });
           
             return platesWithIngredients;
        }
    }
}

module.exports = PlatesIndexService;