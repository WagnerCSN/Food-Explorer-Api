const AppError = require("../../utils/AppError");
const knex = require("../../database/knex");

class PlatesIndexService{
    constructor(platesIndexRepository){
        this.platesIndexRepository = platesIndexRepository;
    }

    async execute({id, name, cost, typeOfPlate_id, ingredient_id}){
        let plates;
        if(name){
            // const platesIndexName = await this.platesIndexRepository.indexByName(name);
            // if(platesIndexName.length ===0){
            //     throw new AppError("Enter a valid name!");
            // }

            
           const filter = name.split(",").map(nome=>nome.trim());
             plates = await knex("typeOfPlates").select().innerJoin("plates", "plates.typeOfPlate_id", "typeOfPlates.id").whereLike("typeOfPlates.name", `%${name}%`); //whereIn("typeOfPlates.name", filter).where("plates.id",id).whereLike("plates.name", `%${name}%`);
          
            const typeid = await knex("typeofplates").select();
            const plateswithtype = plates.map(plate => {
                const platetype = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                
            return{
                ...plate,
                platetype
            }
            });
           
             return plateswithtype;
        }
            
        if(cost){
            const platesIndexCost = await this.platesIndexRepository.indexByCost(cost);
            if(platesIndexCost.length ===0){
                throw new AppError("Enter a valid cost!");
            }
            return platesIndexCost;
        }

        // if(typeOfPlate_id){
        //     const platesIndexTypeOfPlate = await this.platesIndexRepository.indexByTypeOfPlates(typeOfPlate_id);
           
        //     if(platesIndexTypeOfPlate.length ===0){
        //         throw new AppError("Enter a valid type Of Plate!");
        //     }

 

        //     return platesIndexTypeOfPlate;
        // }

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