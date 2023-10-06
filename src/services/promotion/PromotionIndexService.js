const AppError = require("../../utils/AppError");

class PromotionIndexService{
    constructor(promotionIndexRepository){
        this.promotionIndexRepository = promotionIndexRepository;
    }

    async execute({id, name_promotion, name_dish}){

        const typeid = await this.promotionIndexRepository.selectByTypeOfpromotion();
        const ingredient = await this.promotionIndexRepository.selectByIngredients(); 

        if(name){
            const promotionIndexName = await this.promotionIndexRepository.indexByName(name);
            if(promotionIndexName.length ===0){
                throw new AppError("Enter a valid name!");
            }
            
            const promotionWithName = promotionIndexName.map(plate => {
                const promotionWithType = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const promotionWithIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
                return{
                    name: plate.name, 
                    description: plate.description, 
                    cost: plate.cost, 
                    image: plate.image,
                    typeOfPlate: promotionWithType.map(promotionWithType => promotionWithType.name).toString(),
                    ingredients: promotionWithIngredient.map(promotionWithIngredient => promotionWithIngredient.name).toString()
                }
            });
           
             return promotionWithName;
        }
            
       
        if(typeOfPlate_name){
            const promotionIndexTypeOfPlate = await this.promotionIndexRepository.indexByTypeOfpromotion(typeOfPlate_name);
           
            if(promotionIndexTypeOfPlate.length ===0){
                throw new AppError("Enter a valid type Of Plate!");
            }

            const promotionWithType = promotionIndexTypeOfPlate.map(plate => {
                const promotionType = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const promotionIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
            return{
                name: plate.name, 
                description: plate.description, 
                cost: plate.cost, 
                image: plate.image,
                typeOfPlate: promotionType.map(promotionType => promotionType.name).toString(),
                ingredients: promotionIngredient.map(promotionIngredient => promotionIngredient.name).toString()
            }
            });
           
             return promotionWithType;
        }

        if(ingredients_name){
            const promotionIndexIngredient = await this.promotionIndexRepository.indexByIngredients(ingredients_name);
            if(promotionIndexIngredient.length ===0){
                throw new AppError("Enter a valid ingredient!");
            }

            const promotionWithIngredients = promotionIndexIngredient.map(plate => {
                const promotionType = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const promotionIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
                return{
                    name: plate.name, 
                    description: plate.description, 
                    cost: plate.cost, 
                    image: plate.image,
                    typeOfPlate: promotionType.map(promotionType => promotionType.name).toString(),
                    ingredients: promotionIngredient.map(promotionIngredient => promotionIngredient.name).toString()
                }
            });
           
             return promotionWithIngredients;
        }
    }
}

module.exports = PromotionIndexService;