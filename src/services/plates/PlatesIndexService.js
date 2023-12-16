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
                const platesWithIngredient = ingredient.filter(ingredient => ingredient.plate_id ===plate.id);
                return{
                    name: plate.name, 
                    description: plate.description, 
                    value: plate.value, 
                    image: plate.image,
                    typeOfPlate: platesWithType.map(platesWithType => platesWithType.name).toString(),
                    ingredients: platesWithIngredient.map(ingredient => ingredient.name)
                }
            });
           
             return platesWithName;
        }
            
       
        if(typeOfPlate_name){
            const platesIndexTypeOfPlate = await this.platesIndexRepository.indexByTypeOfPlates(typeOfPlate_name);
           
            if(platesIndexTypeOfPlate.length ===0){
               // throw new AppError("Enter a valid type Of Plate!");
            }

            const platesWithType = platesIndexTypeOfPlate.map(plate => {
                const platesType = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const platesIngredient = ingredient.filter(ingredient => ingredient.plate_id ===plate.id);
            return{
                id: plate.id,
                name: plate.name, 
                description: plate.description, 
                cost: plate.cost, 
                value: plate.value,
                image: plate.image,
                typeOfPlate: platesType.map(platesType => platesType.name).toString(),
                ingredients: platesIngredient.map(ingredient => ingredient.name)
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
                
                const platesIngredient = ingredient.filter(ingredient => ingredient.plate_id ===plate.id);
                return{
                    name: plate.name, 
                    description: plate.description, 
                    cost: plate.cost, 
                    image: plate.image,
                    typeOfPlate: plate.typeOfPlate_id,
                    ingredients: platesIngredient.map(ingredient => ingredient.name)
                }
            });
           
             return platesWithIngredients;
        }
    }
}

module.exports = PlatesIndexService;