const knex = require("../../database/knex");

class PlatesRepository{
    async findByName(name){
        const checkExistPlate = await knex("plates").where({name}).first();

        return checkExistPlate;
    }
    
    async findByTypePlate(typeOfPlate_id){
        const checkExistTypeOfPlate = await knex("typeOfPlates").select("*").where("id", typeOfPlate_id).first();

        return checkExistTypeOfPlate;
    }    
        
    async findByIngredients(){
        const selectIngredients = await knex("ingredients").select("*");

        return selectIngredients;
    }
    
    async create({name, description, cost, value, image, typeOfPlate_id}){
        const plateCreated = await knex("plates").insert({name, description, cost, value, typeOfPlate_id, image})

        return plateCreated;
   }

   async insertIngredients(insertIngredient){ 
    const ingredientCreated = await knex("ingredients").insert(insertIngredient);

    return ingredientCreated;
}
}
module.exports = PlatesRepository;
