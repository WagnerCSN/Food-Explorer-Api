const AppError = require("../../utils/AppError");
const knex = require("../../database/knex");

class PlatesIndexService{
    constructor(platesIndexRepository){
        this.platesIndexRepository = platesIndexRepository;
    }

    async execute({id, name, typeOfPlate_name, ingredients_name}){
        let plates;
        if(name){
            // const platesIndexName = await this.platesIndexRepository.indexByName(name);
            // if(platesIndexName.length ===0){
            //     throw new AppError("Enter a valid name!");
            // }

            
           const filter = name.split(",").map(nome=>nome.trim());
             plates = await knex("plates").select().whereLike("name", `%${name}%`); 
          
            const typeid = await knex("typeofplates").select();
            const ingredient = await knex("ingredients").select();
            const plateswithtype = plates.map(plate => {
                const platetype = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const plateIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
            return{
                name: plate.name, 
                description: plate.description, 
                cost: plate.cost, 
                image: plate.image,
                typeOfPlate: platetype.map(platetype => platetype.name).toString(),
                ingredients: plateIngredient.map(plateIngredient => plateIngredient.name).toString()
            }
            });
           
             return plateswithtype;
        }
            
       
        if(typeOfPlate_name){
            // const platesIndexTypeOfPlate = await this.platesIndexRepository.indexByTypeOfPlates(typeOfPlate_id);
           
            // if(platesIndexTypeOfPlate.length ===0){
            //     throw new AppError("Enter a valid type Of Plate!");
            // }

            plates = await knex("typeOfPlates").select().innerJoin("plates", "plates.typeOfPlate_id", "typeOfPlates.id").whereLike("typeOfPlates.name", `%${typeOfPlate_name}%`); 
          console.log(plates);
            const typeid = await knex("typeofplates").select();
            const ingredient = await knex("ingredients").select();
            const plateswithtype = plates.map(plate => {
                const platetype = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const plateIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
            return{
                name: plate.name, 
                description: plate.description, 
                cost: plate.cost, 
                image: plate.image,
                typeOfPlate: platetype.map(platetype => platetype.name).toString(),
                ingredients: plateIngredient.map(plateIngredient => plateIngredient.name).toString()
            }
            });
           
             return plateswithtype;

           // return platesIndexTypeOfPlate;
        }

        if(ingredients_name){
            //const platesIndexIngredient = await this.platesIndexRepository.indexByIngredients(ingredient_id);
            // if(platesIndexIngredient.length ===0){
            //     throw new AppError("Enter a valid ingredient!");
            // }

            plates = await knex("ingredients").select().innerJoin("plates", "plates.ingredient_id", "ingredients.id").whereLike("ingredients.name", `%${ingredients_name}%`); //whereIn("typeOfPlates.name", filter).where("plates.id",id).whereLike("plates.name", `%${name}%`);
          
            const typeid = await knex("typeofplates").select();
            const ingredient = await knex("ingredients").select();
            const plateswithtype = plates.map(plate => {
                const platetype = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const plateIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
            return{
                name: plate.name, 
                description: plate.description, 
                cost: plate.cost, 
                image: plate.image,
                typeOfPlate: platetype.map(platetype => platetype.name).toString(),
                ingredients: plateIngredient.map(plateIngredient => plateIngredient.name).toString()
            }
            });
           
             return plateswithtype;
           // return platesIndexIngredient;
        }
    }
}

module.exports = PlatesIndexService;